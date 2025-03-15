import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { JWT_SECRET, pool } from "../config";
import jwt from "jsonwebtoken";

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "Email and password are required" });
            return;
        }

        // Проверяем, существует ли таблица
        const result = await pool.query(`
        SELECT EXISTS (
          SELECT FROM pg_tables 
          WHERE schemaname = 'public' 
          AND tablename = 'users'
        );
      `);

        const tableExists = result.rows[0].exists;

        if (!tableExists) {
            await pool.query(`
          CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(100) UNIQUE NOT NULL,
            password TEXT NOT NULL
          );
        `);

            // Создаём пользователя
            const newUser = await pool.query(
                `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`,
                [email, password]
            );

            // Генерируем токен
            const token = jwt.sign({ id: newUser.rows[0].id, email }, JWT_SECRET, { expiresIn: "365d" });

            res.status(201).json({ message: "User created", user: newUser.rows[0], token });
            return;
        }

        // Ищем пользователя
        const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        const user = userResult.rows[0];

        if (!user) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        if (user.password !== password) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        // Генерируем JWT
        const token = jwt.sign({ id: user.id, email }, JWT_SECRET, { expiresIn: "365d" });

        res.json({ message: "Login successful", user, token });
    } catch (error) {
        next(error);
    }
}

// Добавление пользователя
export async function addUser(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "Email and password are required" });
            return;
        }

        const result = await pool.query(
            `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`,
            [email, password]
        );

        res.status(201).json({ message: "User added", user: result.rows[0] });
    } catch (error) {
        next(error);
    }
}

// Получение всех пользователей
export async function getUsers(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await pool.query(`SELECT * FROM users`);
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
}

// Обновление пользователя
export async function updateUser(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const { email, password } = req.body;

        if (!email && !password) {
            res.status(400).json({ message: "Nothing to update" });
            return;
        }

        const updateFields = [];
        const values = [];

        if (email) {
            updateFields.push(`email = $${updateFields.length + 1}`);
            values.push(email);
        }
        if (password) {
            updateFields.push(`password = $${updateFields.length + 1}`);
            values.push(password);
        }

        values.push(id);
        const query = `UPDATE users SET ${updateFields.join(", ")} WHERE id = $${values.length} RETURNING *`;

        const result = await pool.query(query, values);

        if (result.rowCount === 0) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.json({ message: "User updated", user: result.rows[0] });
    } catch (error) {
        next(error);
    }
}

// Удаление пользователя
export async function deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;

        const result = await pool.query(`DELETE FROM users WHERE id = $1 RETURNING *`, [id]);

        if (result.rowCount === 0) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.json({ message: "User deleted", user: result.rows[0] });
    } catch (error) {
        next(error);
    }
}