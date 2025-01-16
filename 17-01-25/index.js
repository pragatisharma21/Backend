import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { requestLogger } from "./src/Middleware/logger.js";
import userRoutes from "./src/Routes/user.route.js"
import { connectDB } from "./src/utils/db.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(requestLogger);

const PORT = process.env.PORT || 3000;
connectDB()

app.use("/user", userRoutes)

app.get("/", (req, res)=>{
    res.send(`<h1>Server is running on port ${PORT}</h1>`)
})


app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
