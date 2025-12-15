import express from "express";
import { placeOrder } from "../controllers/orderController.js";

const router = express.Router();

// ✅ SIMPLE ROUTE (NO middleware)
router.post("/place", placeOrder);

export default router;
