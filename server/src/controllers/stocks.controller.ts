import {
  intraday,
  weeklyAdjusted,
  monthlyAdjusted,
  dailyAdjusted,
} from "../clients/alphavantage";
import {
  GetIntradayStockInput,
  GetStockInputBase,
} from "../types/stocks.types";

export const getIntraday = async (req, res) => {
  const query = req.query as GetIntradayStockInput;
  const result = await intraday(query);

  res.status(200).json(result);
};

export const getDailyAdjusted = async (req, res) => {
  const query = req.query as GetIntradayStockInput;
  const result = await dailyAdjusted(query);

  res.status(200).json(result);
};

export const getWeeklyAdjusted = async (req, res) => {
  const query = req.query as GetStockInputBase;
  const result = await weeklyAdjusted(query);

  res.status(200).json(result);
};

export const getMonthlyAdjusted = async (req, res) => {
  const query = req.query as GetStockInputBase;
  const result = await monthlyAdjusted(query);

  res.status(200).json(result);
};
