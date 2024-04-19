import { Router } from "express";
import verifyToken from "../middleware/auth.js";
import { createPurchase, deletedPurchase, getPurchases, updatePurchase } from "../controller/purchase.js";

const purchaseRouter = Router();

purchaseRouter.get("/purchases", verifyToken, getPurchases)
purchaseRouter.post("/purchases", verifyToken, createPurchase)
purchaseRouter.put("/purchases/:id", verifyToken, updatePurchase)
purchaseRouter.delete("/purchases/:id", verifyToken, deletedPurchase)

export default purchaseRouter;