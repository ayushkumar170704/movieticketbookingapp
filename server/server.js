import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve as serveInngest } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";

// Ensure DB is connected on cold start
await connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true,
  })
);

// Clerk middleware (place before protected routes)
app.use(clerkMiddleware());

// Health route
app.get("/", (_req, res) => res.send("server is live"));

// Inngest endpoint for Vercel (serverless)
app.use("/api/inngest", serveInngest({ client: inngest, functions }));

// Export the app as a handler for Vercel (@vercel/node)
export default app;
