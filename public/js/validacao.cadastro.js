var caracteresEspeciais = "!@#$%&?";

var mensagemErroSenha = document.getElementById("mensagemErroSenha");
var mensagemErroNome = document.getElementById("mensagemErroNome");
var mensagemErroEmail = document.getElementById("mensagemErroEmail");

var nomeValido = false;
var emailValido = false;
var senhaValida = false;

function validarSenha() {
  var senha = document.getElementById("inputSenha").value;
  mensagemErroSenha.innerHTML = ``;
 
  var tamanhoSenha = senha.length;
  var temCaractereEspecial = false;
  var mensagensErro = [];
 
  senhaValida = true;
 
  // Validando tamanho da senha
  if (tamanhoSenha < 8) {
    mensagensErro.push(`A senha precisa ter oito caracteres.`);
    senhaValida = false;
  }
  if (tamanhoSenha > 30) {
    mensagensErro.push(`A senha precisa ter no máximo trinta caracteres.`);
    senhaValida = false;
  }
 
  // Validando caractere especial
  for (var i = 0; i < tamanhoSenha; i++) {
    if (caracteresEspeciais.includes(senha[i])) {
      temCaractereEspecial = true;
    }
  }
 
  if (!temCaractereEspecial) {
    mensagensErro.push(`A senha precisa conter ao menos um caractere especial.`);
    senhaValida = false;
  }
 
  // Validando letras minúsculas e maiúsculas
  const minusculas = [..."abcdefghijklmnopqrstuvwxyz"];
  const maiusculas = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var temMinuscula = minusculas.some((letra) => senha.includes(letra));
  var temMaiuscula = maiusculas.some((letra) => senha.includes(letra));
 
  if (!temMinuscula) {
    mensagensErro.push("A senha precisa conter ao menos uma letra minúscula.");
    senhaValida = false;
  }
  if (!temMaiuscula) {
    mensagensErro.push("A senha precisa conter ao menos uma letra maiúscula.");
    senhaValida = false;
  }
 
  // Validando número
  const numeros = [..."0123456789"];
  var temNumero = numeros.some((numero) => senha.includes(numero));
  if (!temNumero) {
    mensagensErro.push("A senha precisa conter ao menos um número.");
    senhaValida = false;
  }
 
  mensagemErroSenha.innerHTML = mensagensErro.join("<br>");
 
  // Chama a função para verificar se pode habilitar o botão
  verificarCampos();
}
 
function validarEmail() {
  var email = document.getElementById("inputEmail").value;
  mensagemErroEmail.innerHTML = ``;
 
  emailValido = true;
 
  // Valida se tem .com ou .br
  var finalEmailCom = email.endsWith(".com");
  var finalEmailBr = email.endsWith(".br");
 
  if (!finalEmailCom && !finalEmailBr) {
    mensagemErroEmail.innerHTML += `O e-mail não é válido. Deve terminar com '.com' ou '.br'. <br>`;
    emailValido = false;
  }
 
  // Valida se tem arroba
  var arroba = email.includes("@");
 
  if (!arroba) {
    mensagemErroEmail.innerHTML += `O e-mail não é válido. Deve conter '@'. <br>`;
    emailValido = false;
  }
 
  // Chama a função para verificar se pode habilitar o botão
  verificarCampos();
}
 
function validarNome() {
  var nome = document.getElementById("inputNome").value;
  mensagemErroNome.innerHTML = ``;
 
  nomeValido = true;
 
  var tamanhoNome = nome.length;
 
  // Valida tamanho do nome
  if (tamanhoNome <= 3) {
    mensagemErroNome.innerHTML = `O nome precisa ter ao menos três caracteres.`;
    nomeValido = false;
  } else if (tamanhoNome > 45) {
    mensagemErroNome.innerHTML = `O nome passa do limite de caracteres.`;
    nomeValido = false;
  }
 
  // Chama a função para verificar se pode habilitar o botão
  verificarCampos();
}
 
function verificarCampos() {
  var botaoCadastro = document.querySelector('.cadastro-button');
 
  if (nomeValido && emailValido && senhaValida) {
    botaoCadastro.disabled = false;
  } else {
    botaoCadastro.disabled = true;
  }
}
 
function mascaraData(event) {
  var input = document.getElementById("inputData");
  var data = input.value;
  var dataLength = data.length;
 
  if (event.key != "Backspace") {
    if (dataLength == 4 || dataLength == 7) {
      data += "/";
    }
    input.value = data;
  }
}
