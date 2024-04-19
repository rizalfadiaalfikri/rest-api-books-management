import { Router } from "express";
import { deletedBook, getBooks, saveBook, updateBook } from "../controller/book.js";
import verifyToken from "../middleware/auth.js";

const bookRouter = Router();

bookRouter.get('/books', verifyToken, getBooks)
bookRouter.post('/books', verifyToken, saveBook)
bookRouter.put('/books/:id', verifyToken, updateBook)
bookRouter.delete('/books/:id', verifyToken, deletedBook)

export default bookRouter;