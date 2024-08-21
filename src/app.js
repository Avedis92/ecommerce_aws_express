import express from "express";
import * as Dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import imageRouter from "./routes/imageRoute.js";
import serverless from "serverless-http";

Dotenv.config();

const isLocalDev = process.env.IS_LOCAL === "true";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/carts", cartRouter);
app.use("/api/v1/images", imageRouter);

export const handler = serverless(app);

if (isLocalDev) {
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
  });
}
