import express from "express";
import stocksRouter from "./routes/stocks.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", stocksRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
