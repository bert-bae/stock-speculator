import { Interval } from "alphavantage-wrapper-ts";

export type GetStockInputBase = {
  symbol: string;
};

export type GetIntradayStockInput = GetStockInputBase & {
  interval?: Interval;
};
