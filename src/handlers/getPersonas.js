"use strict";

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async () => {
    const params = {
        TableName: 'Persona',
    }

    const data = await dynamo.scan(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(data.Items)
    }
};
