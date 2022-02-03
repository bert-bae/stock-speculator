import React from "react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

export type CandlestickChartProps = {
  title?: string;
  dataPoints: Array<{ x: string; y: [number, number, number, number] }>;
};

const createOptions = (title?: string): ApexOptions => ({
  plotOptions: {
    candlestick: {
      colors: {
        upward: "#0f9d58",
        downward: "#a52714",
      },
      wick: {
        useFillColor: true,
      },
    },
  },
  chart: {
    type: "candlestick",
  },
  title: {
    text: title,
    align: "left",
  },
});

export const CandlestickChart: React.FC<CandlestickChartProps> = ({
  title,
  dataPoints,
}) => {
  return (
    <Chart
      options={createOptions(title)}
      type="candlestick"
      series={[{ data: dataPoints }]}
    />
  );
};

export { timeSeriesToCandleDataPoints } from "./dataMapper";
