import { Router } from "express";
const router = Router();

import { register, login } from "../controllers/authController.js";
import { checkAdmin } from "../middlewares/authMiddleware.js";



//login
router.post("/login", checkAdmin, login);

//register
router.post("/register", register);

export default router;