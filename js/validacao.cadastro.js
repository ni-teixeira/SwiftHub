var caracteresEspeciais = "!@#$%&?";

var mensagemErroSenha = document.getElementById("mensagemErroSenha");
var mensagemErroNome = document.getElementById("mensagemErroNome");
var mensagemErroEmail = document.getElementById("mensagemErroEmail");

function validarSenha() {
  var senha = document.getElementById("inputSenha").value;
  mensagemErroSenha.innerHTML = ``;

  var tamanhoSenha = senha.length;
  var hasCaractereEspecial = false;
  var mensagensErro = [];

  //validando tamanho da senha
  if (tamanhoSenha < 8) {
    mensagensErro.push(`A senha precisa ter 8 caracteres.`);
  }

  //validando caractere especial
  for (var i = 0; i < tamanhoSenha; i++) {
    if (caracteresEspeciais.includes(senha[i])) {
      hasCaractereEspecial = true;
    }
  }

  if (!hasCaractereEspecial) {
    mensagensErro.push(`A senha precisa conter ao menos 1 caractere especial.`);
  }

  //validando se ha minusculas na senha por meio do .search(regex a-z lowercase)
  if (senha.search(/[a-z]/) < 0) {
    mensagensErro.push(`A senha precisa conter ao menos 1 letra minúscula.`);
  }
  //validando se ha maiusculas na senha por meio do .search(regex A-Z uppercase)
  if (senha.search(/[A-Z]/) < 0) {
    mensagensErro.push(`A senha precisa conter ao menos 1 letra maiúscula.`);
  }

  //monta innerHTML de erro
  if (mensagensErro.length > 0) {
    mensagemErroSenha.innerHTML = mensagensErro.join("<br>");
  }
}

function validarEmail() {
  var email = document.getElementById("inputEmail").value;
  mensagemErroEmail.innerHTML = ``;

  // valida se tem .com ou .br
  var finalEmailCom = email.endsWith(".com");
  var finalEmailBr = email.endsWith(".br");
  if (!finalEmailCom && !finalEmailBr) {
    // o ! significa negacao ou seja se for false
    mensagemErroEmail.innerHTML += `O e-mail não é válido. Deve terminar com '.com' ou '.br'. <br>`;
  }

  // valida se tem arroba
  var arroba = email.includes("@");
  if (!arroba) {
    mensagemErroEmail.innerHTML += `O e-mail não é válido. Deve conter '@'.<br>`;
  }
}

function validarNome() {
  var email = document.getElementById("inputNome").value;
  mensagemErroNome.innerHTML = ``;

  var tamanhoEmail = email.length;

  // precisa colocar o max
  if (tamanhoEmail <= 3 ) {
    mensagemErroNome.innerHTML = `O nome precisa ter ao menos 3 caracteres`;
  }
}
