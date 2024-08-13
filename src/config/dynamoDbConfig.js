import AWS from "./awsConfig.js";

export const dynamoDb = new AWS.DynamoDB.DocumentClient();
