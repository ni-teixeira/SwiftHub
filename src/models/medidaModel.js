var database = require("../database/config");

function buscarKPIs(){
    var instrucaoSql = `
    SELECT 
        (SELECT COUNT(*) FROM usuario) as total_usuarios,
        (SELECT ROUND(AVG(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())), 1) FROM USUARIO) as media_idade,
        (SELECT a.nome FROM album a 
        JOIN usuario u ON a.idAlbum = u.fkAlbum
        GROUP BY a.idAlbum, a.nome
        ORDER BY COUNT(*) DESC]
        LIMIT 1) as album_mais_selecionado 
    `;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUsuariosPorAlbum(){
    var instrucaoSql = `
    SELECT
        a.nome as nome_album,
        COUNT(u.idUsuario) as qtd_usuarios,
        ROUND((COUNT u.idUsuario) * 100) / (SELECT COUNT(*) FROM usuario), 1) as porcentagem
        FROM album a
        LEFT JOIN usuario u ON a.idAlbum = u.fkAlbum
        GROUP BY a.idAlbum, a.nome
        ORDER BY qtd_usuarios DESC
    `
    console.log('Executando a instrução SQL: \n' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDistribuicaoIdade() {
    var instrucaoSql = `
        SELECT 
            CASE 
                WHEN TIMESTAMPDIFF(YEAR, data_nascimento, CURDATE()) < 18 THEN 'Menor de 18'
                WHEN TIMESTAMPDIFF(YEAR, data_nascimento, CURDATE()) BETWEEN 18 AND 24 THEN '18-24'
                WHEN TIMESTAMPDIFF(YEAR, data_nascimento, CURDATE()) BETWEEN 25 AND 34 THEN '25-34'
                WHEN TIMESTAMPDIFF(YEAR, data_nascimento, CURDATE()) BETWEEN 35 AND 44 THEN '35-44'
                ELSE '45+'
            END as faixa_etaria,
            COUNT(*) as quantidade,
            ROUND((COUNT(*) * 100.0) / (SELECT COUNT(*) FROM usuario), 1) as porcentagem
        FROM usuario
        GROUP BY faixa_etaria
        ORDER BY faixa_etaria
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarKPIs,
    buscarUsuariosPorAlbum,
    buscarDistribuicaoIdade
}
