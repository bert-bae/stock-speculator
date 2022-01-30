import express from "express";
import stocksRouter from "./routes/stocks.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/stocks", stocksRouter);

app.listen(process.env.PORT);

// intraday("IBM");

// weeklyAdjusted("BB.TO");
