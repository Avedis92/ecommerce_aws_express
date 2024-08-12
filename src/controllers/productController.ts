import { Request, Response } from "express";
import productService from "../services/productService.ts";
import { CategoryType } from "../shared/types.ts";

class ProductController {
  getProductByIdController() {
    return (req: Request, res: Response) => {
      const { id } = req.params;
      const product = productService.getProductByIdService(id);
      res.status(200).json(product);
    };
  }
  getProductsByCategoryController() {
    return (req: Request, res: Response) => {
      const { category } = req.params;
      const products = productService.getProductsByCategoryService(
        category as CategoryType
      );
      res.status(200).json(products);
    };
  }
}

const productController = new ProductController();
export default productController;
