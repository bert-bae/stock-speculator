import { weeklyAdjusted, companyOverview } from "../clients/alphavantage";

export const getStockOverview = async (symbol: string) => {
  const [overview, weekly] = await Promise.all([
    companyOverview({ symbol }),
    weeklyAdjusted({ symbol }),
  ]);

  return {
    overview,
    weeklyAdjusted: weekly,
  };
};
