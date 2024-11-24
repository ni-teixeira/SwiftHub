var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/kpis", function (req, res) {
    medidaController.buscarKPIs(req, res);
});

router.get("/usuarios-por-album", function (req, res) {
    medidaController.buscarUsuariosPorAlbum(req, res);
});

module.exports = router;