var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.post("/registrar", function (req, res) {
    jogoController.registrar(req, res);
});

module.exports = router;