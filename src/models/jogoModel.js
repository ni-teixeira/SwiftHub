var database = require("../database/config");

function registrar(pontuacao, acertos, erros, fkUsuario) {
    console.log("Acessando jogoModel");

    var instrucaoSql = `
        INSERT INTO jogo (pontuacao, acertos, erros, fkUsuario) VALUES (${pontuacao}, ${acertos}, ${erros}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar
};