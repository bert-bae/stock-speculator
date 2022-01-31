import { configureStore } from "@reduxjs/toolkit";
import stockOverview from "./feature/stockOverview/stockOverview.slice";

export default configureStore({
  reducer: { stockOverview: stockOverview },
});
