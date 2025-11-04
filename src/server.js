import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

import connectDB from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 5001;

// middlewares
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://streamify-frontend.vercel.app", // 👈 add your deployed frontend here (if not yet deployed, keep it for later)
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on this port ${PORT}`);
  connectDB();
});
