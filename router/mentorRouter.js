import { Router } from "express";
import mentorController from "../controller/mentorController.js";

const router = Router();
router.post("/",mentorController.createMentor);
router.get("/",mentorController.getMentor);
router.get("/:id",mentorController.getOneMentor);
router.put("/:id",mentorController.editMentor);
export default router;
