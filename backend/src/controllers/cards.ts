import { NextFunction, Request, Response } from "express";
import { pool } from "../config";

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

        if (!title || !price) {
            return res.status(400).json({ message: "Title and price are required" });
        }

        // Вставляем данные
        const result = await pool.query(
            `INSERT INTO cards (title, subtitle, description, price, registration_without_power, binding_to_rf_number, list, card_types, tags) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
            [title, subtitle, description, price, registration_without_power, binding_to_rf_number, list, card_types, tags]
        );

        res.status(201).json({ message: "Card added", card: result.rows[0] });
    } catch (error) {
        next(error);
    }
}