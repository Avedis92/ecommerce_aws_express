import { dynamoDb } from "../config/dynamoDbConfig.js";
import { v4 as uuidV4 } from "uuid";
/*cart will have the following properties
    id:string;
    userId: string;
    products: [
    {
      id: string;
      imageSource: string;
      price: number;
      requestedQuantity: number;
      title: string
    }
    ]
 */
class CartService {
  async addNewCart(cartObj) {
    const params = {
      TableName: "Carts",
      Item: {
        id: uuidV4(),
        userId: cartObj.userId,
        products: [...cartObj.products],
      },
    };
    const result = await dynamoDb.put(params).promise();
    return result;
  }

  async updateCart(products, id) {
    const params = {
      TableName: "Carts",
      Key: {
        id,
      },
      UpdateExpression: "set products = :products",
      ExpressionAttributeValues: {
        ":products": products,
      },
      ReturnValues: "ALL_NEW",
    };
    const result = await dynamoDb.update(params).promise();
    return result;
  }

  async getCartById(id) {
    const params = {
      TableName: "Carts",
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
}

const cartService = new CartService();
export default cartService;
