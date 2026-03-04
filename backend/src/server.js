import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import {connectDB} from './config/db.js';
import recipeRoutes from "./routes/recipeRoutes.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  //origin: "http://localhost:5173"
}));

app.use(express.json())
app.use("/recipes", recipeRoutes);

app.get("/", (req, res) => {
 res.send("Recipe is running successfully");
});

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}`)
    })
})


