const express = require("express");
const { getTodo, getUser } = require("../controller");

const router = express.Router();

router.get('/todos', getTodo);
router.get('/user/:id', getUser);


module.exports = router;