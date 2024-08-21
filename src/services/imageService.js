import s3 from "../config/awsS3Config.js";

class ImageService {
  async getImages() {
    const params = {
      Bucket: "aws-ecommerce-s3-mens-wear",
    };
    const data = await s3.listObjectsV2(params).promise();
    return data.Contents.map((c) => c.Key);
  }
}

const imageService = new ImageService();
export default imageService;
