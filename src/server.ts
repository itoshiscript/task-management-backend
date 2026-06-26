import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// Routes
app.use("/users", userRoutes)
app.use("/auth", authRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;