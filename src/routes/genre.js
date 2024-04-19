import { Router } from "express";
import verifyToken from "../middleware/auth.js";
import { createGenre, deleteGenre, getGenres, updateGenre } from "../controller/genre.js";

const genreRouter = Router();

genreRouter.get("/genres", verifyToken, getGenres);
genreRouter.post("/genres", verifyToken, createGenre);
genreRouter.put("/genres/:id", verifyToken, updateGenre);
genreRouter.delete("/genres/:id", verifyToken, deleteGenre);

export default genreRouter;