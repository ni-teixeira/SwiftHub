const listaAlbuns = document.querySelector(".lista-albuns");
const imagens = document.querySelectorAll(".album");
const botaoProximo = document.querySelector(".botao-proximo");
const botaoAnterior = document.querySelector(".botao-anterior");
const pontos = document.querySelectorAll(".ponto");

var imagemAtual = 0;

function mostrarImagem(numero) {
  listaAlbuns.style.left = -numero * 100 + "%"; // multiplica por 800 porque cada imagem tem 800px de largura

  for (var i = 0; i < pontos.length; i++) {
    pontos[i].classList.remove("ativo");
  }

  pontos[numero].classList.add("ativo");
}

function proximaImagem() {

  if (imagemAtual < 11) {
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
    imagemAtual = 4;
  }
  mostrarImagem(imagemAtual);
}

// adicionando clique nos botões
botaoProximo.addEventListener("click", proximaImagem);
botaoAnterior.addEventListener("click", imagemAnterior);

// adicionando clique nos pontos
for (let i = 0; i < pontos.length; i++) {
  pontos[i].addEventListener("click", () => {
    imagemAtual = i;
    mostrarImagem(imagemAtual);
  });
}

// setInterval(proximaImagem, 5000);