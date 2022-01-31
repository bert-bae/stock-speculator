import axios from "axios";
import { TimeSeriesType } from "../feature/stockOverview/stockOverview.slice";

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API_ENDPOINT}/api`,
  timeout: 30000,
});

export type GetStockOverviewDto = {
  timeSeries: Array<any>;
  timeSeriesType: TimeSeriesType;
  overview: Record<string, any>;
};

export const getStockOverview = async (
  symbol: string
): Promise<GetStockOverviewDto> => {
  const { data } = await client.get(`/overview?symbol=${symbol}`);
  return {
    timeSeries: data.weeklyAdjusted.timeSeries,
    overview: data.overview,
    timeSeriesType: TimeSeriesType.Weekly,
  };
};
