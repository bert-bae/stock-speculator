import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { StockOverviewFeature } from "./feature/stockOverview";

function App() {
  return (
    <Provider store={store}>
      <StockOverviewFeature />
    </Provider>
  );
}

export default App;
