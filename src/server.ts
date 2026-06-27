import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import cookieParser from "cookie-parser";
import taskRoutes from "./routes/taskRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/users", userRoutes)
app.use("/auth", authRoutes)
app.use("/tasks", taskRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;