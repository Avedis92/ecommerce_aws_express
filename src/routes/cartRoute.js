import { Router } from "express";
import cartController from "../controllers/cartController.js";

const cartRouter = Router();

cartRouter.get("/:id", cartController.getCartByIdController());

cartRouter.post("/add", cartController.addNewCartController());

cartRouter.patch("/add/:id", cartController.updateCartController());

export default cartRouter;
