import { Router } from "express";
import imageController from "../controllers/imageController.js";

const imageRouter = Router();

imageRouter.get("/", imageController.getImagesController());

export default imageRouter;
