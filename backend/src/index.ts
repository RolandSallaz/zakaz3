import express from 'express';
import router from './routes';
import { pool } from './config';
import errorHandler from './middlewares/errorHandler';
import cors from 'cors'
const app = express();
const port = process.env.PORT || 1337;
const prefix = process.env.NODE_ENV == "production" ? '/api' : '/'
app.use(cors())

app.use(express.json());

app.use(prefix, router);
app.use(errorHandler)

pool.connect()
    .then(() => {
        console.log("✅ Connected to PostgreSQL!");
        app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
    })
    .catch((err) => console.error("❌ DB connection error:", err));