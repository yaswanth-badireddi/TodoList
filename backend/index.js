import express from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';
import {connectDB} from './DB/connectDB.js';
import itemRoutes from './routes/item.route.js';

dotenv.config();

const PORT= 5050;
const app = express();

app.use(express.json());

app.use("/api/items",itemRoutes);

app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on port ${PORT}`);
});

