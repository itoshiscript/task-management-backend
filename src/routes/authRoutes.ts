import express from "express";
import {loginUser, storeUser} from "../controllers/authController";

const router = express.Router();

router.post("/register", storeUser);
router.post("/login", loginUser);

export default router;