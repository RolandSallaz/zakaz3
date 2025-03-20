import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_CLIENT, JWT_SECRET = 'secret_key', DATABASE_PORT } = process.env;

export const pool = new Pool({
    user: DATABASE_USERNAME || "postgres",
    host: DATABASE_HOST || "localhost",
    database: DATABASE_CLIENT || "postgres",
    password: DATABASE_PASSWORD || "postgres",
    port: Number(DATABASE_PORT) || 5432,
});
