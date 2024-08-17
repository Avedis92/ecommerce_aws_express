import productService from "../services/productService.js";
import { HTTPError } from "../shared/error.js";

class ProductController {
  getProductByIdController() {
    return async (req, res) => {
      const { id } = req.params;
      try {
        const product = await productService.getProductByIdService(id);
        if (product) {
          res.status(200).json(product[0]);
        } else throw new HTTPError(404, "Product was not found");
      } catch (e) {
        if (e.statusCode === 404) {
          res.status(404).json({ type: "error", message: e.message });
        } else res.status(500).json({ type: "error", message: e.message });
      }
    };
  }

  getProductsByCategoryController() {
    return async (req, res) => {
      const { category } = req.params;
      const { limit } = req.query;
      try {
        const products = await productService.getProductsByCategoryService(
          category,
          limit
        );
        if (products) {
          res.status(200).json(products);
        } else throw new HTTPError(404, "Products were not found");
      } catch (e) {
        if (e.statusCode === 404) {
          res.status(404).json({ type: "error", message: e.message });
        } else res.status(500).json({ type: "error", message: e.message });
      }
    };
  }

  addProductController() {
    return async (req, res) => {
      const product = req.body;
      try {
        await productService.addProductsService(product);
        res
          .status(200)
          .json({ type: "success", message: "Product was successfully added" });
      } catch {
        res.status(500).json({
          type: "error",
          message: "Product was not successfully added",
        });
      }
    };
  }
}

const productController = new ProductController();
export default productController;
