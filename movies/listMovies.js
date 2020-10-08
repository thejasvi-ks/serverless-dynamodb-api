"use strict";

const aws = require("aws-sdk");

const dynamoDb = new aws.DynamoDB.DocumentClient();

const params = {
  TableName: process.env.DYNAMODB_TABLE || "movies",
};

module.exports.GetMovies = (event, context, cb) => {
  dynamoDb.scan(params, (error, result) => {
    if (error) {
      cb(null, {
        statusCode: error.statusCode || 501,
        headers: { "Content-Type": "text/plain" },
        body: "Couldn't Get the Records. Please Try Again in Some Time.!",
      });
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
    cb(null, response);
  });
};
