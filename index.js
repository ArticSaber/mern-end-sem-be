import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import newsRoute from "./routes/newsRoute.js";
import validateNews from "./routes/validateNews.js";
const app = Express();
const PORT = 3500;
dotenv.config();
app.use(cors());
app.use(Express.json());
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (errorMessage) => console.log(errorMessage));
db.once("open", () => console.log(`Connected successfully to the database.`));

app.use("/api/v1/news/validate", validateNews);
app.use("/api/v1/news", newsRoute);

app.listen(
  PORT,
  console.log(`Server started running at http://localhost:${PORT}/api/v1/news`)
);
