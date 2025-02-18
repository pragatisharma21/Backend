import express from "express";
import {
  createEmployer,
  deleteEmployer,
  getEmployer,
  updateEmployer,
} from "../Controller/employer.controller.js";

const router = express.Router();

router.post("/employers", createEmployer);
router.get("/employers/:id", getEmployer);
router.put("/employers/:id", updateEmployer);
router.delete("/employers/:id", deleteEmployer);

export default router;
