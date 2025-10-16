import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors";
import userRouter from "./routes/user.route.js";
import listingRouter from "./routes/listing.route.js";
import bookingRouter from "./routes/booking.route.js";
import path from "path";

let port = process.env.PORT || 6000;

let app = express();
const _dirname = path.resolve();

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*' , (_,res) => {
  res.sendFile(path.resolve(_dirname , "frontend" , "dist" , "index.html"));
})

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/listing", listingRouter);
app.use("/api/booking", bookingRouter);

app.listen(port, () => {
  connectDb();
  console.log(`Server is running on port ${port}`);
});
