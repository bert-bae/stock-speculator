import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadOverview } from "./stockOverview.thunks";

export const StockOverviewFeature = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadOverview.thunk({ symbol: "BB" }));
  }, []);
  return <div>{JSON.stringify(state, null, 2)}</div>;
};
