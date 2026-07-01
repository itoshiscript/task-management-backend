import express from "express";
import {getCurrentUser, loginUser, logoutUser, storeUser} from "../controllers/authController";
import {validateRequest} from "../middlewares/validateMiddleware";
import {registerValidator} from "../validators/registerValidator";
import {protect} from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", validateRequest(registerValidator) ,storeUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", protect, getCurrentUser)

export default router;