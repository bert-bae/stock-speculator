import { PayloadAction, AsyncThunk } from "@reduxjs/toolkit";

export type GenericReducer<T, P> = (state: T, action: PayloadAction<P>) => void;

export type ThunkMap<State, Returned, ThunkArg = any, ThunkApiConfig = any> = {
  thunk: AsyncThunk<Returned, ThunkArg, ThunkApiConfig>;
} & {
  fulfilled: GenericReducer<State, Returned>;
  rejected: GenericReducer<State, Returned>;
  pending: GenericReducer<State, Returned>;
};

export type StockTimeSeries = Record<
  string,
  {
    open: string;
    high: string;
    low: string;
    close: string;
    adjustedClose: string;
    volume: string;
    dividendAmount: string;
  }
>;
