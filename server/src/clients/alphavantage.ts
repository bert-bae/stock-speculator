import AlphaVantage, {
  FundamentalData,
  Interval,
  StockTimeSeries,
} from "alphavantage-wrapper-ts";
import { GetIntradayStockInput } from "../types/stocks.types";

const av = new AlphaVantage({ apikey: process.env.ALPHAVANTAGE_API_KEY });

export const intraday = async (
  input: GetIntradayStockInput
): Promise<StockTimeSeries.IntradayResponse> => {
  const response = await av.stockTimeSeries.intraday({
    ...input,
    interval: input.interval || Interval.SIXTY_MIN,
  });
  return response;
};

export const dailyAdjusted = async (
  input: GetIntradayStockInput
): Promise<StockTimeSeries.WeeklyAdjustedResponse> => {
  const response = await av.stockTimeSeries.dailyAdjusted({
    symbol: input.symbol,
  });
  return response;
};

export const weeklyAdjusted = async (
  input: GetIntradayStockInput
): Promise<StockTimeSeries.WeeklyAdjustedResponse> => {
  const response = await av.stockTimeSeries.weeklyAdjusted({
    symbol: input.symbol,
  });
  return response;
};

export const monthlyAdjusted = async (
  input: GetIntradayStockInput
): Promise<StockTimeSeries.WeeklyAdjustedResponse> => {
  const response = await av.stockTimeSeries.monthlyAdjusted({
    symbol: input.symbol,
  });
  return response;
};

export const companyOverview = async (
  input: GetIntradayStockInput
): Promise<FundamentalData.CompanyOverviewResponse> => {
  const response = await av.fundamentalData.companyOverview({
    symbol: input.symbol,
  });
  return response;
};
