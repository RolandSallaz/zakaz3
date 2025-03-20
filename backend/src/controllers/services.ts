import { Request, Response, NextFunction } from "express";
import { pool } from "../config";

// Функция для создания таблицы, если её нет
async function ensureTableExists() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS services (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            price NUMERIC(10,2) NOT NULL,
            info TEXT,
            upd TEXT
        );
    `);
}

// Метод: Создать маленькую карточку (Small Card)
export async function addSmallCard(req: Request, res: Response, next: NextFunction) {
    try {
        await ensureTableExists();

        const { title, description, price, info, upd } = req.body;

        if (!title || price === undefined) {
            res.status(400).json({ message: "Title and price are required" });
            return;
        }

        const result = await pool.query(
            `INSERT INTO services (title, description, price, info, upd) 
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [title, description, price, info, upd]
        );

        res.status(201).json({ message: "Small card added", card: result.rows[0] });
        return;
    } catch (error) {
        next(error);
    }
}

// Метод: Обновить маленькую карточку
export async function updateSmallCard(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const { title, description, price, info, upd } = req.body;

        if (!id) {
            res.status(400).json({ message: "Small Card ID is required" });
            return;
        }

        const result = await pool.query(
            `UPDATE services SET 
                title = $1, description = $2, price = $3, info = $4, upd = $5 
             WHERE id = $6 RETURNING *`,
            [title, description, price, info, upd, id]
        );

        if (result.rowCount === 0) {
            res.status(404).json({ message: "Small Card not found" });
            return;
        }

        res.status(200).json({ message: "Small card updated", card: result.rows[0] });
        return;
    } catch (error) {
        next(error);
    }
}

// Метод: Удалить маленькую карточку
export async function deleteSmallCard(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Small Card ID is required" });
            return;
        }

        const result = await pool.query(`DELETE FROM services WHERE id = $1 RETURNING *`, [id]);

        if (result.rowCount === 0) {
            res.status(404).json({ message: "Small Card not found" });
            return;
        }

        res.status(200).json({ message: "Small card deleted" });
        return;
    } catch (error) {
        next(error);
    }
}

// Метод: Получить все маленькие карточки
export async function getAllSmallCards(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await pool.query(`SELECT * FROM services ORDER BY id DESC`);
        res.status(200).json({ cards: result.rows });
        return;
    } catch (error) {
        next(error);
    }
}

// Метод: Получить одну маленькую карточку по ID
export async function getSmallCardById(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Small Card ID is required" });
            return;
        }

        const result = await pool.query(`SELECT * FROM services WHERE id = $1`, [id]);

        if (result.rowCount === 0) {
            res.status(404).json({ message: "Small Card not found" });
            return;
        }

        res.status(200).json({ card: result.rows[0] });
        return;
    } catch (error) {
        next(error);
    }
}
