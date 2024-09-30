const { response, request } = require('express')
const { dbConnection } = require('./settings')

const getList = async (res = response) => {
    dbConnection.query("SELECT * FROM persona", (err, result) => {
        if (err) throw err;
        res.json({
            data: result,
            message: "Listando datos"
        })
    })
};

const savePersona = async (req, res) => {
    const data = {
        nombre: req.body.nombre,
        nacimiento: req.body.nacimiento,
        color_ojos: req.body.color_ojos,
        sexo: req.body.sexo,
        color_cabello: req.body.color_cabello,
        altura: req.body.altura,
        peso: req.body.peso,
        color_piel: req.body.color_piel,
        creado: req.body.creado,
        modificado: req.body.modificado
    };
    dbConnection.query("INSERT INTO persona SET ?", data, (err, result) => {
        if (err) throw err;
        res.json({
            message: "Objeto creado"
        })
    });
}

module.exports = {
    getList,
    savePersona
}