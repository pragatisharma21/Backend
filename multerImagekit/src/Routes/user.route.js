import express from "express";
import { SignupUser } from "../Controller/user.controller.js";
import upload from "../Middlewares/upload.js";

const router = express.Router();

router.post("/signup", upload.single("avatar"), SignupUser);

export default router