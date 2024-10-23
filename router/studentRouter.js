import { Router } from "express";
import studentController from "../controller/studentController.js";

const router = Router();
router.post("/", studentController.createStudent);
router.get("/:id", studentController.getStudent);
router.get("/", studentController.getAllStudent);
router.put("/:id", studentController.editStudent);
export default router;
