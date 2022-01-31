import { PayloadAction, AsyncThunk, AsyncThunkAction } from "@reduxjs/toolkit";
import { AsyncThunkPendingActionCreator } from "@reduxjs/toolkit/dist/createAsyncThunk";

export type GenericReducer<T, P> = (state: T, action: PayloadAction<P>) => void;

export type ThunkMap<State, Returned, ThunkArg = any, ThunkApiConfig = any> = {
  thunk: AsyncThunk<Returned, ThunkArg, ThunkApiConfig>;
} & {
  fulfilled: GenericReducer<State, Returned>;
  rejected: GenericReducer<State, Returned>;
  pending: GenericReducer<State, Returned>;
};
