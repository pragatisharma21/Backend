import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./src/config/db.js";
import productRoute from "./src/Routes/product.route.js";

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());

connectDb();

app.use("/product", productRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
