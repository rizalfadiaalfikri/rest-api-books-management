import { Router } from "express";
import { deletedBook, getBooks, saveBook, updateBook } from "../controller/book.js";

const bookRouter = Router();

bookRouter.get('/books', getBooks)
bookRouter.post('/books', saveBook)
bookRouter.put('/books/:id', updateBook)
bookRouter.delete('/books/:id', deletedBook)

export default bookRouter;