"use strict";

const aws = require("aws-sdk");
const uuid = require("uuid");

const dynamoDb = new aws.DynamoDB.DocumentClient();

module.exports.CreateMovie = (event, context, cb) => {
  const data = JSON.parse(event.body);

  if (!data) {
    cb(null, {
      statusCode: 404,
      headers: { "Content-Type": "text/plain" },
      body: "Couldn't create the record. Please try again.!",
    });
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE || "movies",
    Item: {
      id: uuid.v1(),
      name: data,
    },
  };

  dynamoDb.put(params, (error) => {
    if (error) {
      cb(null, {
        statusCode: error.statusCode || 501,
        headers: { "Content-Type": "text/plain" },
        body: "Couldn't create the record. Please try again.!",
      });
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    cb(null, response);
  });
};
