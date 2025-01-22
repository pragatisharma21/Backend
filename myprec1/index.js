import express from "express"
import dotenv from "dotenv"
import { connection } from "./src/Utils/db.js"
import { signUUp } from "./src/Controller/user.controller.js"


dotenv.config()

const app = express()
app.use(express.json())
connection()
app.use("/user", signUUp)
const PORT = process.env.PORT || 8080



app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})


