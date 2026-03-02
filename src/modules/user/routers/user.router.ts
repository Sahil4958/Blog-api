import express from "express";
import { validate } from "../../../utils/validation";
import { addUserSchema, loginUserSchema } from "../validators/user.validator";
import { login, register } from "../controllers/user.controller";

const router = express.Router();

router.post("/register", validate(addUserSchema), register);
router.post("/login", validate(loginUserSchema), login);

export default router;
