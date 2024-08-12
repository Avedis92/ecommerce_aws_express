import { Router } from "express";
import productController from "../controllers/productController.js";

const productRouter = Router();

productRouter.get("/:id", productController.getProductByIdController());
productRouter.get(
  "/categories/:category",
  productController.getProductsByCategoryController()
);

export default productRouter;
