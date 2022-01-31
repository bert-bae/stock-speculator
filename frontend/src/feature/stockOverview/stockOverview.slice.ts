import { createSlice } from "@reduxjs/toolkit";
import { loadOverview } from "./stockOverview.thunks";
import { attachThunkHandlers } from "../../utils/redux";

export enum TimeSeriesType {
  "Monthly" = "Monthly",
  "Weekly" = "Weekly",
  "Intraday" = "Intraday",
}

export interface StockOverviewState {
  overview: Record<string, any>;
  timeSeries: Array<{
    open: string;
    high: string;
    low: string;
    close: string;
    adjustedClose: string;
    volume: string;
    dividendAmount: string;
  }>;
  timeSeriesType: TimeSeriesType;
  symbol: string;
}

const initialState: StockOverviewState = {
  overview: {},
  timeSeries: [],
  timeSeriesType: TimeSeriesType.Weekly,
  symbol: "",
};

export const stockOverview = createSlice({
  name: "stockOverview",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    attachThunkHandlers(builder, loadOverview);
  },
});

// Action creators are generated for each case reducer function
export const {} = stockOverview.actions;

export default stockOverview.reducer;
