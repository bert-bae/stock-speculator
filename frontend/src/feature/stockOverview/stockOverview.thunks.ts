import { createAsyncThunk } from "@reduxjs/toolkit";
import { StockOverviewState } from "./stockOverview.slice";
import { getStockOverview, GetStockOverviewDto } from "../../clients/backend";
import { ThunkMap } from "../../types";

export const loadOverview: ThunkMap<
  StockOverviewState,
  GetStockOverviewDto,
  { symbol: string }
> = {
  thunk: createAsyncThunk("stockOverview/fetch", async ({ symbol }) => {
    const data = await getStockOverview(symbol);
    return data;
  }),
  fulfilled: (state, action) => {
    state.loading = false;
    state.timeSeries = action.payload.timeSeries;
    state.timeSeriesType = action.payload.timeSeriesType;
    state.overview = action.payload.overview;
  },
  rejected: (state, action) => {
    state.loading = false;
  },
  pending: (state, action) => {
    state.loading = true;
  },
};
