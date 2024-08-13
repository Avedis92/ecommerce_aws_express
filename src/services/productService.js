import { dynamoDb } from "../config/dynamoDbConfig.js";
import { v4 as uuidV4 } from "uuid";

class ProductService {
  async getProductByIdService(id) {
    const params = {
      TableName: "Products",
      Key: {
        id,
      },
      ReturnValues: "ALL_NEW",
    };
    const result = await dynamoDb.get(params).promise();
    return result;
  }
  // to update  the controller below in another PR
  getProductsByCategoryService(category) {
    return [
      {
        id: "1",
        title: "pants",
        description: "skinny pants",
        price: 12,
        quantity: 4,
        rating: 4.5,
        category,
        imageSource: "blabla",
      },
    ];
  }
  async addProductsService(product) {
    const params = {
      TableName: "Products",
      Item: {
        id: uuidV4(),
        ...product,
      },
    };
    const result = await dynamoDb.put(params).promise();
    return result;
  }
}

const productService = new ProductService();
export default productService;
