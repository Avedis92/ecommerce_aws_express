import AWS from "./awsConfig.js";

const s3 = new AWS.S3({
  region: "eu-central-1",
});

export default s3;
