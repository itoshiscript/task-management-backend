import express from "express";
import {protect} from "../middlewares/authMiddleware";
import {store} from "../controllers/taskController";
import {validateRequest} from "../middlewares/validateMiddleware";
import {taskValidator} from "../validators/taskValidator";

const router = express.Router();

router.use(protect);

router.post("/", validateRequest(taskValidator) ,store)

export default router;