const { Router } = require("express");
const { getList, savePersona, getListTest, getByIdTest } = require("../database/controller/people");

const router = Router();

router.get('/', [], getList);

router.get('/test/', [], getListTest)

router.get('/test/:id', [], getByIdTest)

router.post('/', [], savePersona);

module.exports = router;