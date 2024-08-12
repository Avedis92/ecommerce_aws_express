import express, { Express } from "express";
import * as Dotenv from "dotenv";
import bodyParser from "body-parser";
import productRouter from "./routes/productRoute.js";

Dotenv.config();

const PORT = process.env.PORT;

const app: Express = express();

app.use(bodyParser.json());

app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});
