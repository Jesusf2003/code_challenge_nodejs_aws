const { Router } = require("express");
const { getList, savePersona } = require("./controller");

const router = Router();

router.get('/', [], getList);

router.post('/', [], savePersona);

module.exports = router;