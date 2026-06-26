import express from "express";
import {storeUser} from "../controllers/authController";

const router = express.Router();

router.post("/register", storeUser)

export default router;