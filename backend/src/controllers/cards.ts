import { NextFunction, Request, Response } from "express";
import { pool } from "../config";

const parseArray = (value: any) =>
    typeof value === "string"
        ? value.split("\n").map(item => item.trim()).filter(Boolean)
        : Array.isArray(value)
            ? value
            : [];

export async function addCard(req: Request, res: Response, next: NextFunction) {
    try {
        // Создаём таблицу, если она не существует
        await pool.query(`
        CREATE TABLE IF NOT EXISTS cards (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          subtitle VARCHAR(255),
          description TEXT,
          price NUMERIC(10,2) NOT NULL,
          registration_without_power BOOLEAN DEFAULT false,
          binding_to_rf_number BOOLEAN DEFAULT false,
          list TEXT[],
          card_types TEXT[],
          tags TEXT[]
        );
      `);

        const { title, subtitle, description, price, registration_without_power, binding_to_rf_number, list, card_types, tags } = req.body;

        if (!title || price === undefined) {
            res.status(400).json({ message: "Title and price are required" });
            return;
        }

        const parsedList = parseArray(list);
        const parsedCardTypes = parseArray(card_types);
        const parsedTags = parseArray(tags);

        const result = await pool.query(
            `INSERT INTO cards (title, subtitle, description, price, registration_without_power, binding_to_rf_number, list, card_types, tags) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
            [title, subtitle, description, price, registration_without_power, binding_to_rf_number, parsedList, parsedCardTypes, parsedTags]
        );

        res.status(201).json({ message: "Card added", card: result.rows[0] });
    } catch (error) {
        next(error);
    }
}

// Метод для обновления карточки
export async function updateCard(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const { title, subtitle, description, price, registration_without_power, binding_to_rf_number, list, card_types, tags } = req.body;

        if (!id) {
            res.status(400).json({ message: "Card ID is required" });
            return;
        }

        const parsedList = parseArray(list);
        const parsedCardTypes = parseArray(card_types);
        const parsedTags = parseArray(tags);

        const result = await pool.query(
            `UPDATE cards SET 
                title = $1, subtitle = $2, description = $3, price = $4, 
                registration_without_power = $5, binding_to_rf_number = $6, 
                list = $7, card_types = $8, tags = $9 
             WHERE id = $10 RETURNING *`,
            [title, subtitle, description, price, registration_without_power, binding_to_rf_number, parsedList, parsedCardTypes, parsedTags, id]
        );

        if (result.rowCount === 0) {
            res.status(404).json({ message: "Card not found" });
            return;
        }

        res.status(200).json({ message: "Card updated", card: result.rows[0] });
    } catch (error) {
        next(error);
    }
}

// Метод для удаления карточки
export async function deleteCard(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Card ID is required" });
            return;
        }

        const result = await pool.query(`DELETE FROM cards WHERE id = $1 RETURNING *`, [id]);

        if (result.rowCount === 0) {
            res.status(404).json({ message: "Card not found" });
            return;
        }

        res.status(200).json({ message: "Card deleted" });
    } catch (error) {
        next(error);
    }
}

export async function getCards(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await pool.query(`SELECT * FROM cards`);
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
}
