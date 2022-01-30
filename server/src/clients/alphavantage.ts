import AlphaVantage, {
  FundamentalData,
  Interval,
  StockTimeSeries,
} from "alphavantage-wrapper-ts";
import {
  GetIntradayStockInput,
  GetStockInputBase,
} from "../types/stocks.types";

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

export const weeklyAdjusted = async (
  input: GetStockInputBase
): Promise<StockTimeSeries.WeeklyAdjustedResponse> => {
  const response = await av.stockTimeSeries.weeklyAdjusted({
    symbol: input.symbol,
  });
  return response;
};

export const monthlyAdjusted = async (
  input: GetStockInputBase
): Promise<StockTimeSeries.WeeklyAdjustedResponse> => {
  const response = await av.stockTimeSeries.monthlyAdjusted({
    symbol: input.symbol,
  });
  return response;
};

export const companyOverview = async (
  input: GetStockInputBase
): Promise<FundamentalData.CompanyOverviewResponse> => {
  const response = await av.fundamentalData.companyOverview({
    symbol: input.symbol,
  });
  return response;
};

// export const companyFinancials = async (
//   input: GetStockInputBase
// ): Promise<any> => {
//   // const response = await
// };
