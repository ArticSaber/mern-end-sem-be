import Express from "express";
const router = Express.Router();
import {
  getAllNews,
  addNewNews,
  updateNews,
} from "../controllers/newsController.js";

router.route("/").get(getAllNews).post(addNewNews).patch(updateNews);
export default router;
