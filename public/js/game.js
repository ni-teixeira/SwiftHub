var pontuacaoAtual = 0;
var respostasCorretas = {1:'A', 2:'D', 3:'C'};

// pergunta atual = numero do onclick
// resposta = a letra do onclick
function verificarResposta (perguntaAtual, resposta) {

    // se a resposta for certa aumenta a pontuação
    if(resposta == respostasCorretas[perguntaAtual]) {
        pontuacaoAtual += 100;
        document.getElementById('pontos').innerHTML = pontuacaoAtual;
    }
    
    // esconde a pergunta atual - elemento p do html
    document.getElementById('p' + perguntaAtual).style.display = 'none';
    
    // se for primeira pergunta mostra a segunda
    if(perguntaAtual == 1) {
        document.getElementById('p2').style.display = 'block';
    } 

    // se for segunda pergunta mostra a terceira
    else if(perguntaAtual == 2) {
        document.getElementById('p3').style.display = 'block';
    }

    // se for a última pergunta
    else {
        mostrarResultadoFinal();
    }
}

function mostrarResultadoFinal() {
    var acertos = pontuacaoAtual/100;
    var erros = 3 - acertos;
    
    var resultado = document.getElementById('resultado');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <h2 style="font-size:50px;color:#FE377F;margin:10px 0">Quiz Completo!</h2>
        <div style="font-size:24px;color:#FE377F;margin:10px 0">
            Pontuação Final: ${pontuacaoAtual} pontos
        </div>
        <p>Você acertou ${acertos} e errou ${erros} questões!</p>
    `;
}