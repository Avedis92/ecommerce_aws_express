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

  async getProductsByCategoryService(category) {
    const params = {
      TableName: "Products",
      indexName: "category-index",
      KeyConditionExpression: "category = :productCategory",
      ExpressionAttributeValues: {
        ":productCategory": category,
      },
      Limit: 4,
    };
    const result = await dynamoDb.query(params).promise();
    return result;
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
