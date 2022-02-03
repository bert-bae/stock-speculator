import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "lodash.isempty";
import {
  CandlestickChart,
  CandlestickChartProps,
  timeSeriesToCandleDataPoints,
} from "../../components/Charts/CandlestickChart";
import { DataRow } from "../../components/DataRow";
import { RootState } from "../../store";

import { StockOverviewState } from "./stockOverview.slice";
import { loadOverview } from "./stockOverview.thunks";
import { commaDeliminateStringInt } from "../../utils/numbers";

export const StockOverviewFeature = () => {
  const [candleDataPoints, setCandleDataPoints] = React.useState<
    CandlestickChartProps["dataPoints"]
  >([]);
  const { overview, timeSeries, timeSeriesType, symbol } = useSelector<
    RootState,
    StockOverviewState
  >((state) => state.stockOverview);

  React.useEffect(() => {
    setCandleDataPoints(timeSeriesToCandleDataPoints(timeSeries));
  }, [timeSeries]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadOverview.thunk({ symbol: "BB" }));
  }, []);
  console.log(overview);
  return (
    <Box>
      <Typography variant="h2" />
      <Grid container>
        <Grid item xs={12} md={4}>
          {!isEmpty(overview) && (
            <Box padding={2}>
              <Typography variant="h6" marginBottom={2}>
                {overview.name}
              </Typography>
              <DataRow property={"Currency"} value={overview.currency} />
              <DataRow property={"Foward PE"} value={overview.forwardPE} />
              <DataRow property={"PEG"} value={overview.PEGRatio} />
              <DataRow property={"EPS"} value={overview.EPS} />
              <DataRow property={"Beta"} value={overview.beta} />
              <DataRow
                property={"Market Capitalization"}
                value={commaDeliminateStringInt(overview.marketCapitalization)}
              />
              <DataRow
                property={"Shares Outstanding"}
                value={commaDeliminateStringInt(overview.sharesOutstanding)}
              />
              <DataRow
                property={"Profit Margin"}
                value={overview.profitMargin}
              />
              <DataRow
                property={"Dividend Yield"}
                value={overview.dividendYield}
              />
              <DataRow
                property={"52 Week Range"}
                value={`${overview.fiftyTwoWeekLow} - ${overview.fiftyTwoWeekHigh}`}
              />
              <DataRow
                property={"Revenue (TTM)"}
                value={commaDeliminateStringInt(overview.revenueTTM)}
              />
              <DataRow
                property={"grossProfitTTM"}
                value={commaDeliminateStringInt(overview.grossProfitTTM)}
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <Box padding={2}>
            <CandlestickChart
              title={`${overview.symbol}: ${timeSeriesType}`}
              dataPoints={candleDataPoints}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
