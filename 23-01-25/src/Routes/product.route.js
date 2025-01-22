import express from "express"
import { addProduct, getPaginatedData } from "../Controller/product.controller.js"

const router = express.Router()


router.post("/addProduct" , addProduct)
router.get("/paginatedData", getPaginatedData)


export default router;