import * as stocksController from "../controllers/stocks.controller";
import express from "express";

const router = express.Router();

router.get("/intraday", stocksController.getIntraday);

router.get("/weekly", stocksController.getWeeklyAdjusted);

router.get("/monthly", stocksController.getMonthlyAdjusted);

router.get("/overview", stocksController.getOverview);

export default router;
