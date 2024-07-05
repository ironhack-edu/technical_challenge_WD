import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./config/mongoose.config.js";
import morgan from "morgan";
import cors from "cors";
import phoneRouter from "./routes/phone.router.js";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: [process.env.REACT_APP_URL] }));

app.use("/phones", phoneRouter);

app.listen(process.env.PORT, () => {
  console.clear();
  console.log(`Server running on port ${process.env.PORT}...`);
  connectDB();
});
