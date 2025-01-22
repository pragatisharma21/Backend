import express, { Router } from "express"
import { loginn, signUUp } from "../Controller/user.controller.js"


const router = express.Router()

router.post("/signUUp" , signUUp)
router.post("/loginn", loginn)


export default router