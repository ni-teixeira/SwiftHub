var express = require("express");
var router = express.Router();

var albumController = require("../controllers/albumController");

// Rota para listar todos os albuns
router.get("/", function (req, res) {
    albumController.listar(req, res);
});

// rota para buscar album por ID
router.get("/:idAlbum", function (req, res) {
    albumController.buscarPorId(req, res);
});

// rota para buscar album por usuario
router.get("/usuario/:idUsuario", function (req, res) {
    albumController.buscarPorUsuario(req, res);
});


module.exports = router;