import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./src/Config/db.js"
import router from "./src/Routes/user.routes.js"


dotenv.config()

const app = express()

app.use(express.json())
app.use("/users", router)


connectDb()


const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`)
})