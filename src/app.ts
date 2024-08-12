import express, { Express } from "express";
import * as Dotenv from "dotenv";
import bodyParser from "body-parser";
import productRouter from "./routes/productRoute.js";
import serverless from "serverless-http";

Dotenv.config();

const isLocalDev = process.env.IS_LOCAL === "true";

const app: Express = express();

app.use(bodyParser.json());

app.use("/products", productRouter);

export const handler = serverless(app);

if (isLocalDev) {
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
  });
}
