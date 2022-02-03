import { CandlestickChartProps } from ".";
import { StockTimeSeries } from "../../../types";

export const timeSeriesToCandleDataPoints = (
  timeSeries: StockTimeSeries,
  offset?: number,
  limit?: number
) => {
  const dataPoints: CandlestickChartProps["dataPoints"] = [];
  for (const point in timeSeries) {
    const dataPoint = timeSeries[point];
    dataPoints.push({
      x: point,
      y: [
        parseInt(dataPoint.open),
        parseInt(dataPoint.high),
        parseInt(dataPoint.low),
        parseInt(dataPoint.close),
      ],
    });
  }

  return dataPoints.reverse().slice(offset || 0, limit);
};
