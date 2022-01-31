import { createAsyncThunk } from "@reduxjs/toolkit";
import { StockOverviewState, TimeSeriesType } from "./stockOverview.slice";
import { getStockOverview, GetStockOverviewDto } from "../../clients/backend";
import { ThunkMap } from "../../types";

export const loadOverview: ThunkMap<
  StockOverviewState,
  GetStockOverviewDto,
  { symbol: string }
> = {
  thunk: createAsyncThunk("stockOverview/fetch", async ({ symbol }) => {
    const response = await getStockOverview(symbol);
    console.log("hello111");

    return response;
  }),
  fulfilled: (state, action) => {
    state.timeSeries = action.payload.timeSeries;
    state.timeSeriesType = action.payload.timeSeriesType;
    state.overview = action.payload.overview;
  },
  rejected: (state, action) => {},
  pending: (state, action) => {},
};
