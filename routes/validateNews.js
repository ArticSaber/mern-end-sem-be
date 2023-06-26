import Express from "express";
const router = Express.Router();
import getNewsID from "../controllers/validateController.js";
router.route("/").post(getNewsID);

export default router;
