import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { getStockOverview } from "./clients/backend";

function App() {
  React.useEffect(() => {
    getStockOverview("BB");
  });
  return (
    <Provider store={store}>
      <p>hello</p>
    </Provider>
  );
}

export default App;
