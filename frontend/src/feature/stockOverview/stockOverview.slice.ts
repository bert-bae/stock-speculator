import { createSlice } from "@reduxjs/toolkit";
import { loadOverview } from "./stockOverview.thunks";
import { attachThunkHandlers } from "../../utils/redux";
import { StockTimeSeries } from "../../types";

export enum TimeSeriesType {
  "Monthly" = "Monthly",
  "Weekly" = "Weekly",
  "Intraday" = "Intraday",
}

export interface StockOverviewState {
  loading: boolean;
  overview: Record<string, any>;
  timeSeries: StockTimeSeries;
  timeSeriesType: TimeSeriesType;
  symbol: string;
}

const initialState: StockOverviewState = {
  loading: false,
  overview: {},
  timeSeries: {},
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
