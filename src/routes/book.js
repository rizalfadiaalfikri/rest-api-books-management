import { Router } from "express";
import { deletedBook, getBooks, saveBook, updateBook } from "../controller/book.js";

const userRouter = Router();

userRouter.get('/books', getBooks)
userRouter.post('/books', saveBook)
userRouter.put('/books/:id', updateBook)
userRouter.delete('/books/:id', deletedBook)

export default userRouter;