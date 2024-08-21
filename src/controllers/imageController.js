import imageService from "../services/imageService.js";

class ImageController {
  getImagesController() {
    return async (req, res) => {
      const result = await imageService.getImages();
      res.status(200).json(result);
    };
  }
}

const imageController = new ImageController();
export default imageController;
