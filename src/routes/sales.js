import { Router } from "express";
import verifyToken from "../middleware/auth.js";
import { createSales, deleteSales, getSales, updateSales } from "../controller/sales.js";

const salesRouter = Router();

salesRouter.get('/sales', verifyToken, getSales)
salesRouter.post('/sales', verifyToken, createSales)
salesRouter.put('/sales/:id', verifyToken, updateSales)
salesRouter.delete('/sales/:id', verifyToken, deleteSales)

export default salesRouter;