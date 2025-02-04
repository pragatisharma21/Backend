import express from "express"
import { signUp } from "../Controllers/user.controller.js";

const router = express.Router()


router.post("/signup", signUp)




export default router;