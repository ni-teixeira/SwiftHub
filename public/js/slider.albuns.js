const listaAlbuns = document.querySelector(".lista-albuns");
const imagens = document.querySelectorAll(".album");
const botaoProximo = document.querySelector(".botao-proximo");
const botaoAnterior = document.querySelector(".botao-anterior");
const pontos = document.querySelectorAll(".ponto");

var imagemAtual = 0;

function mostrarImagem(numero) {
  listaAlbuns.style.left = -numero * 100 + "%"; // multiplica por 100 porque cada div tem 100 de largura

  for (var i = 0; i < pontos.length; i++) {
    pontos[i].classList.remove("ativo");
  }

  pontos[numero].classList.add("ativo");
}

function proximaImagem() {

  if (imagemAtual < 10) {
    imagemAtual = imagemAtual + 1;
  }
  else {
    imagemAtual = 0;
  }

  mostrarImagem(imagemAtual);
}

function imagemAnterior() {

  if (imagemAtual > 0) {
    imagemAtual = imagemAtual - 1;
  }
  else {
    imagemAtual = 10;
  }
  mostrarImagem(imagemAtual);
}

// adicionando clique nos botões
botaoProximo.addEventListener("click", proximaImagem);
botaoAnterior.addEventListener("click", imagemAnterior);