import express from "express"
import dotenv from "dotenv"
import { connection } from "./src/Utils/db.js"
import userrRoutes from "./src/Routes/user.routes.js"


dotenv.config()

const app = express()
app.use(express.json())
connection()
app.use("/user", userrRoutes)

const PORT = process.env.PORT || 8080



app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})


