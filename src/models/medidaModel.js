var database = require("../database/config");

function buscarKPIs() {
    var instrucaoSql = `
    SELECT 
        (SELECT COUNT(*) FROM usuario) as total_usuarios,
        (SELECT ROUND(AVG(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE()))) FROM usuario) as media_idade,
        (SELECT a.nome FROM album as a 
    JOIN usuario as u ON a.idAlbum = u.fkAlbum
    GROUP BY a.idAlbum, a.nome
    ORDER BY COUNT(*) DESC
    LIMIT 1) as album_mais_selecionado 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUsuariosPorAlbum() {
    var instrucaoSql = `
    SELECT
        a.nome as nome_album,
        COUNT(u.idUsuario) as qtd_usuarios
    FROM album as a
    LEFT JOIN usuario as u ON a.idAlbum = u.fkAlbum
    GROUP BY a.idAlbum, a.nome
    ORDER BY qtd_usuarios DESC
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarKPIs,
    buscarUsuariosPorAlbum,
};
