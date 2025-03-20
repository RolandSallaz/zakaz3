import express from 'express';
import router from './routes';
import { pool } from './config';
import errorHandler from './middlewares/errorHandler';
import cors from 'cors'
const app = express();
const port = process.env.PORT || 1337;

app.use(cors())

app.use(express.json());

app.use('/api', router);
app.use(errorHandler)

pool.connect()
    .then(() => {
        console.log("✅ Connected to PostgreSQL!");
        app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
    })
    .catch((err) => console.error("❌ DB connection error:", err));