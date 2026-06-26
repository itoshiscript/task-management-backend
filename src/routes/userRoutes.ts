import express from "express";
import {index} from "../controllers/userController";

const router = express.Router();

router.get("/", index);


export default router;