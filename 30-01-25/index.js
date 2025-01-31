import express from "express";
import dotenv from "dotenv";
import CORS from "cors";
import { connectDb } from "./src/Config/db.config.js";
import userRouter from "./src/Routes/user.routes.js"
import cron from "node-cron"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./src/Config/swagger.js" assert { type: "json" }; 



dotenv.config();

const PORT = process.env.PORT || 5000;
let task = cron.schedule("* * * * *", ()=>{
    console.log("server cron is schedule")
})
task.stop()


const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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