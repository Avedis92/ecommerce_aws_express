import productService from "../services/productService.js";

class ProductController {
  getProductByIdController() {
    return (req, res) => {
      const { id } = req.params;
      const product = productService.getProductByIdService(id);
      res.status(200).json(product);
    };
  }
  getProductsByCategoryController() {
    return (req, res) => {
      const { category } = req.params;
      const products = productService.getProductsByCategoryService(category);
      res.status(200).json(products);
    };
  }
}

const productController = new ProductController();
export default productController;
