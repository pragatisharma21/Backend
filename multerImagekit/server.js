import express from "express";
import dotenv from "dotenv";
import CORS from "cors";
import { connectDb } from "./src/config/db.js";
import userRouter from "./src/Routes/user.route.js"

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use(CORS({
    origin: ["*", process.env.CLIENT_URI]
}));

connectDb();

app.use("/uploads", express.static("uploads") );

app.use("/users", userRouter)

app.get('/', (req, res)=>{
    res.send(`<h1>Server is Running</h1>`)
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})
