const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
    const data = JSON.parse(event);
    console.log(data)
    const params = {
        TableName: "Persona",
        Item: {
            id: data.id,
            nombre: data.nombre,
            nacimiento: data.nacimiento,
            color_ojos: data.color_ojos,
            sexo: data.sexo,
            color_cabello: data.color_cabello,
            altura: data.altura,
            peso: data.peso,
            color_piel: data.color_piel,
            creado: data.creado,
            modificado: data.modificado
        }
    }
    await dynamodb.put(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Objeto creado"})
    }
}