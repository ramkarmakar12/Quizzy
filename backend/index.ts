require("dotenv").config();
import express, { Express, Request, Response , Application } from 'express';
const mongoose = require("mongoose");

const app: Application = express();

// JSON body parsing
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err:unknown) => console.error("❌ MongoDB connection error:", err));

// Example route
app.get("/", (req:Request, res:Response) => {
  res.json({ message: "Quizzy API is up." });
});

// Error handler middleware (see below)
// const errorHandler = require('./middleware/errorHandler');
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));