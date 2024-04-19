import { Router } from "express";
import { register } from "../controller/auth.js";

const authRouter = Router();

authRouter.post('/auth/register', register);

export default authRouter;