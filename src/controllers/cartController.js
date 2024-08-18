import cartService from "../services/cartService.js";
import { HTTPError } from "../shared/error.js";

class CartController {
  getCartByIdController() {
    return async (req, res) => {
      const { userId } = req.params;
      try {
        const cart = await cartService.getCartByUserId(userId);
        if (cart) {
          res.status(200).json(cart);
        } else res.status(404).json(null);
      } catch (e) {
        if (e.statusCode === 404) {
          res.status(404).json({ type: "error", message: e.message });
        } else res.status(500).json({ type: "error", message: e.message });
      }
    };
  }

  addNewCartController() {
    return async (req, res) => {
      const cartObj = req.body;
      try {
        await cartService.addNewCart(cartObj);
        res.status(200).json({
          type: "success",
          message: "Product was successfully added to cart",
        });
      } catch {
        res.status(500).json({
          type: "error",
          message: "Product was not successfully added to cart",
        });
      }
    };
  }
  updateCartController() {
    return async (req, res) => {
      const products = req.body;
      const { id } = req.params;
      try {
        await cartService.updateCart(products, id);
        res.status(200).json({
          type: "success",
          message: "Product was successfully added to cart",
        });
      } catch {
        res.status(500).json({
          type: "error",
          message: "Product was not successfully added to cart",
        });
      }
    };
  }
}

const cartController = new CartController();
export default cartController;
