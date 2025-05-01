import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config({});

// call databse connection here
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// apis
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);    
})