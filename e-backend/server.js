import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

import { connectDB } from "./lib/db.js";

/**
 * -------------------- TODO 💣 --------------------
 * 
 * - migrate to Typescript
 * - migrate to MINIO
 * - add Zod for Data Sanitization and Input Validation
 * - add Rate Limiting and CORS
 * - add a Global PEP middleware
 * - add global error handler middleware and AppError class
 * - add Logging using winston 
 * 
 * 
 * ------------ WAS FUN PLAYING AROUND WITH EXPRESS, BEEN A WHILE!!
*/


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ========= MIDDLEWARES
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// ========= ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);


// IMPL(later) ========= ERROR BOUNDARY (error handler middlware and 404 route)


// ========= SERVER
app.listen(PORT, () => {
	console.log("Server is running on http://localhost:" + PORT);
	connectDB();
});
