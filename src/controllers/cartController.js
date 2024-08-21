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
        } else res.status(404);
      } catch (e) {
        res.status(500).json({ type: "error", message: e.message });
      }
    };
  }

  addNewCartController() {
    return async (req, res) => {
      const cartObj = req.body;
      try {
        const cart = await cartService.addNewCart(cartObj);
        res.status(200).json({
          type: "success",
          message: "Product was successfully added to cart",
          payload: cart.Attributes,
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
        const cart = await cartService.updateCart(products, id);
        res.status(200).json({
          type: "success",
          message: "Cart was successfully updated",
          payload: cart.Attributes,
        });
      } catch {
        res.status(500).json({
          type: "error",
          message: "Cart was not successfully updated",
        });
      }
    };
  }
}

const cartController = new CartController();
export default cartController;
