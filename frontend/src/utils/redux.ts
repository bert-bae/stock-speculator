import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { ThunkMap } from "../types";

export const attachThunkHandlers = (
  builder: ActionReducerMapBuilder<any>,
  thunkMap: ThunkMap<any, any, any>
) => {
  builder.addCase(thunkMap.thunk.fulfilled, thunkMap.fulfilled);
  builder.addCase(thunkMap.thunk.rejected, thunkMap.rejected);
  builder.addCase(thunkMap.thunk.pending, thunkMap.pending);
};
