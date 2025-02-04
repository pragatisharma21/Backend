import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import { connectDb } from "./src/Utils/db.js"
import router from "./src/Routes/user.routes.js"



dotenv.config()

const app = express()

app.use(express.json())
app.use("/users", router)

connectDb()
const PORT = process.env.PORT || 7890



app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})