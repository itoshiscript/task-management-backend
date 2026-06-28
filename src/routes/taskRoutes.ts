import express from "express";
import {protect} from "../middlewares/authMiddleware";
import {index, show, store} from "../controllers/taskController";
import {validateRequest} from "../middlewares/validateMiddleware";
import {taskValidator} from "../validators/taskValidator";

const router = express.Router();

router.use(protect);

router.post("/", validateRequest(taskValidator) ,store)
router.get("/", index)
router.get("/:id", show)

export default router;