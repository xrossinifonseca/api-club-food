import express from "express";
import dotenv from "dotenv";
import db from "./src/database/db.js";
import userRouter from "./src/routes/user.route.js";
import authRouter from "./src/routes/auth.route.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
db.sync().then(() => console.log("mysql connected"));

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.listen(port, () => console.log(`Servindo rodando na porta ${port}`));
