import axios from "axios";

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API_ENDPOINT}/api`,
  timeout: 5000,
});

export const getStockOverview = async (symbol: string) => {
  const response = await client.get(`/overview?symbol=${symbol}`);
  return response.data;
};
