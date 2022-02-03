import { configureStore } from "@reduxjs/toolkit";
import stockOverview, {
  StockOverviewState,
} from "./feature/stockOverview/stockOverview.slice";

export type RootState = {
  stockOverview: StockOverviewState;
};

export default configureStore({
  reducer: { stockOverview: stockOverview },
});
