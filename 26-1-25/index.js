import express from "express"
import { connectDB } from "./src/utils/db.js"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(express.json())

connectDB()
const PORT = process.env.PORT || 1000
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})