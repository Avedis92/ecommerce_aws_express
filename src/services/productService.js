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
    if (result.Item) {
      return result.Item;
    }
    return undefined;
  }

  async getProductsByCategoryService(category, limit = 12) {
    const params = {
      TableName: "Products",
      IndexName: "category-index",
      KeyConditionExpression: "category = :productCategory",
      ExpressionAttributeValues: {
        ":productCategory": category,
      },
      Limit: limit,
      ScanIndexForward: false,
    };
    const result = await dynamoDb.query(params).promise();
    if (result.Items.length) {
      return result.Items;
    }
    return undefined;
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

  async getAllProductsService() {
    const params = {
      TableName: "Products",
    };
    const result = await dynamoDb.scan(params).promise();
    return result.Items;
  }
}

const productService = new ProductService();
export default productService;
