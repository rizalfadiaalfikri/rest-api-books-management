import { Router } from "express";
import { getBooks } from "../controller/book.js";

const userRouter = Router();

userRouter.get('/books', getBooks)

export default userRouter;