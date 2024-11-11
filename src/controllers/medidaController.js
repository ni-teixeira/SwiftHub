var medidaModel = require("../models/medidaModel");

function buscarKPIs(req, res) {
    console.log(`Recuperando KPIs gerais`);

    medidaModel.buscarKPIs().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as KPIs.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUsuariosPorAlbum(req, res) {
    console.log(`Recuperando distribuição de usuários por álbum`);

    medidaModel.buscarUsuariosPorAlbum().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar usuários por álbum.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDistribuicaoIdade(req, res) {
    console.log(`Recuperando distribuição de idade dos usuários`);

    medidaModel.buscarDistribuicaoIdade().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar distribuição de idade.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDadosGraficoAlbum(req, res) {
    console.log(`Recuperando dados para o gráfico de álbuns`);

    medidaModel.buscarUsuariosPorAlbum().then(function (resultado) {
        if (resultado.length > 0) {
            // Formata os dados para o gráfico
            const labels = resultado.map(r => r.nome_album);
            const dados = resultado.map(r => r.qtd_usuarios);
            const porcentagens = resultado.map(r => r.porcentagem);

            res.status(200).json({
                labels: labels,
                dados: dados,
                porcentagens: porcentagens
            });
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar dados do gráfico.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarKPIs,
    buscarUsuariosPorAlbum,
    buscarDistribuicaoIdade,
    buscarDadosGraficoAlbum
}