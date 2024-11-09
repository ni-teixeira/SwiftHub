var albumModel = require("../models/albumModel");

function listar(req, res) {
    albumModel.listar()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json([]);
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os álbuns: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarPorId(req, res) {
    var idAlbum = req.params.idAlbum;

    if (idAlbum == undefined) {
        res.status(400).send("idAlbum está undefined!");
    } else {
        albumModel.buscarPorId(idAlbum)
            .then((resultado) => {
                if (resultado.length > 0) {
                    res.status(200).json(resultado[0]);
                } else {
                    res.status(204).json([]);
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar o álbum: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {
        albumModel.buscarPorUsuario(idUsuario)
            .then((resultado) => {
                if (resultado.length > 0) {
                    res.status(200).json(resultado[0]);
                } else {
                    res.status(204).json([]);
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar o álbum do usuário: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    listar,
    buscarPorId,
    buscarPorUsuario
}