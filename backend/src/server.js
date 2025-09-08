import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import { connectDB } from "./lib/db.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser());



app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//  app.get("/api/auth/signup", (req, res) => {
//     res.send("signup route");
//   });
//  app.get("/api/auth/login", (req, res) => {
//     res.send("login route");
//   });
//  app.get("/api/auth/logout", (req, res) => {
//     res.send("logout route");
//   });

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});