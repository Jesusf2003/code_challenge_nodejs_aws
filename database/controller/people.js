const { request, response } = require('express');
const { BASE_URL } = require('../settings');
const controller = require('./../models/people');

const axios = require("axios");

const getListTest = async (res = response) => {
    axios.get(`${BASE_URL}/people`)
        .then(result => {
            res.status(200).json(result.data)
        })
        .catch(err => {
            console.log(err)
        })
};

const getList = async (res = response) => {
    controller.getList((err, result) => {
        if (err) throw err;
        res.json({
            ok: true,
            data: result,
            message: "Listando las personas"
        });
    })
};

const getByIdTest = async (req = request, res = response) => {
    axios.get(`${BASE_URL}/people/${req.params.id}`)
        .then(result => {
            res.status(200).json(result.data)
        })
        .catch(err => {
            console.log(err)
        })
}

const savePersona = async (req = request, res = response) => {
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
    controller.save(data, (err, result) => {
        if (err) throw err;
        res.json({
            ok: true,
            result,
            message: "Persona creada"
        })
    })
}

module.exports = {
    getList,
    getListTest,
    getByIdTest,
    savePersona
}