var express = require("express");
var router = express.Router();

var albumController = require("../controllers/albumController");

// Rota para listar todos os álbuns
router.get("/", function (req, res) {
    albumController.listar(req, res);
});

// Rota para buscar álbum por ID
router.get("/:idAlbum", function (req, res) {
    albumController.buscarPorId(req, res);
});

// Rota para buscar álbum por usuário
router.get("/usuario/:idUsuario", function (req, res) {
    albumController.buscarPorUsuario(req, res);
});


module.exports = router;