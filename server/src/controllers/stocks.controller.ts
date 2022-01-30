import {
  intraday,
  weeklyAdjusted,
  monthlyAdjusted,
} from "../clients/alphavantage";
import { getStockOverview } from "../services/stocks.service";
import {
  GetIntradayStockInput,
  GetStockInputBase,
} from "../types/stocks.types";

export const getIntraday = async (req, res) => {
  const query = req.query as GetIntradayStockInput;
  const result = await intraday(query);

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

export const getOverview = async (req, res) => {
  const query = req.query as GetStockInputBase;
  const overview = await getStockOverview(query.symbol);

  res.status(200).json(overview);
};
