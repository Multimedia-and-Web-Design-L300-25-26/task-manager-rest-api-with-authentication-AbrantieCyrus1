import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

// Load environment variables
dotenv.config({ path: process.env.NODE_ENV === "test" ? ".env.test" : ".env" });

const app = express();

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Task Manager API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

export default app;