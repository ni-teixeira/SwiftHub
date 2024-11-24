var pontuacaoAtual = 0;

// objeto do js usado na funcao verificar
var respostasCorretas = { 
    1:'A', 
    2:'D', 
    3:'B',
    4:'C',
    5:'A',
    6:'D'
}; 

// uma estrutura de dados que permite armazenar 
// multiplos valores relacionados em um unico lugar, usando pares de chave e valor.

// pergunta atual = numero do onclick
// resposta = a letra do onclick
function verificarResposta (perguntaAtual, resposta) {

    // se a resposta for certa aumenta a pontuação
    if(resposta == respostasCorretas[perguntaAtual]) {
        pontuacaoAtual += 100;
        document.getElementById('pontos').innerHTML = pontuacaoAtual;
    }
    
    // esconde a pergunta atual dps de validar a reposta
    document.getElementById('p' + perguntaAtual).style.display = 'none';
    
    // se for primeira pergunta mostra a segunda
    if(perguntaAtual == 1) {
        document.getElementById('p2').style.display = 'block';
    } 

    // se for segunda pergunta mostra a terceira
    else if(perguntaAtual == 2) {
        document.getElementById('p3').style.display = 'block';
    }

    else if(perguntaAtual == 3) {
        document.getElementById('p4').style.display = 'block';
    }

    else if(perguntaAtual == 4) {
        document.getElementById('p5').style.display = 'block';
    }

    else if(perguntaAtual == 5) {
        document.getElementById('p6').style.display = 'block';
    }

    // se for a ultima pergunta
    else {
        mostrarResultadoFinal();
    }

    var audio = document.getElementById(`audio${perguntaAtual}`);
    audio.pause();

}

function mostrarResultadoFinal() {
    var acertos = pontuacaoAtual/100;
    var erros = 6 - acertos;
    
    var resultado = document.getElementById('resultado');

    resultado.innerHTML = `
        <h2> ⋆⭒˚.⋆ Jogo completo! ⋆⭒˚.⋆ </h2>
        <div> Pontuação Final: ${pontuacaoAtual} pontos </div>
        <p>Você acertou ${acertos} e errou ${erros} questões!</p>
        <a class="resultado" href="gameInicio.html"> Tentar novamente! </a>`;

        enviarDadosJogo(pontuacaoAtual,acertos,erros);
}

function enviarDadosJogo(pontuacao, acertos, erros) {
    var fkUsuario = sessionStorage.ID_USUARIO;

    // converter fkUsuario para inteiro
    fkUsuario = parseInt(fkUsuario);

    fetch("/jogo/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pontuacaoServer: pontuacao,
            acertosServer: acertos,
            errosServer: erros,
            fkUsuarioServer: fkUsuario
        }),
    })
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            console.log("Dados do jogo enviados com sucesso!");
        } else {
            resposta.text().then(function (texto) {
                console.error(texto);
            });
        }
    })
    .catch(function (erro) {
        console.error("#ERRO: ", erro);
    });
}