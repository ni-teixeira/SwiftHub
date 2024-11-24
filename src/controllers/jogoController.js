var jogoModel = require("../models/jogoModel");

function registrar(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Converter para inteiro
    pontuacao = parseInt(pontuacao);
    acertos = parseInt(acertos);
    erros = parseInt(erros);
    fkUsuario = parseInt(fkUsuario);

    if (isNaN(pontuacao)) {
        res.status(400).send("A pontuação não é um número válido!");
    } else if (isNaN(acertos)) {
        res.status(400).send("Os acertos não são um número válido!");
    } else if (isNaN(erros)) {
        res.status(400).send("Os erros não são um número válido!");
    } else if (isNaN(fkUsuario)) {
        res.status(400).send("O ID do usuário não é um número válido!");
    } else {
        jogoModel.registrar(pontuacao, acertos, erros, fkUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao registrar o jogo: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    registrar
};