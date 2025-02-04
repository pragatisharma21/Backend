import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./src/Utils/db.js"
import router from "./src/Routes/user.routes.js"

dotenv.config()

const app = express()
app.use(express.json())
app.use("/api" , router)

connectDb()

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})