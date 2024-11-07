var caracteresEspeciais = "!@#$%&?";

var mensagemErroSenha = document.getElementById("mensagemErroSenha");
var mensagemErroNome = document.getElementById("mensagemErroNome");
var mensagemErroEmail = document.getElementById("mensagemErroEmail");

function validar() {
  var nome = document.getElementById("inputNome").value;
  var email = document.getElementById("inputEmail").value;
  var senha = document.getElementById("inputSenha").value;
  var albuns = document.getElementById("selectAlbuns").value;

  // valida se estao vazios
  if (nome == "" || email == "" || senha == "" || albuns == "") {
    alert("Preencha todos os campos!");
    return;
  }
}

function validarSenha() {
  var senha = document.getElementById("inputSenha").value;
  mensagemErroSenha.innerHTML = ``;

  var tamanhoSenha = senha.length;
  var temCaractereEspecial = false;
  var mensagensErro = [];

  //validando tamanho da senha
  if (tamanhoSenha < 8) {
    mensagensErro.push(`A senha precisa ter oito caracteres.`);
  }
  if (tamanhoSenha > 30) {
    mensagensErro.push(`A senha precisa ter no máximo trinta caracteres.`);
  }

  //validando caractere especial
  for (var i = 0; i < tamanhoSenha; i++) {
    if (caracteresEspeciais.includes(senha[i])) {
      temCaractereEspecial = true;
    }
  }

  if (!temCaractereEspecial) {
    mensagensErro.push(
      `A senha precisa conter ao menos um caractere especial.`
    );
  }

  // criando array com letras e spread operator
  const minusculas = [..."abcdefghijklmnopqrstuvwxyz"];
  const maiusculas = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  // verifica com o some se passa em pelo menos uma das letras dentro do array
  // o "letra" eh o nome do elemento do array
  var temMinuscula = minusculas.some((letra) => senha.includes(letra));
  var temMaiuscula = maiusculas.some((letra) => senha.includes(letra));
  if (!temMinuscula) {
    mensagensErro.push("A senha precisa conter ao menos uma letra minúscula.");
  }
  if (!temMaiuscula) {
    mensagensErro.push("A senha precisa conter ao menos uma letra maiúscula.");
  }

  const numeros = [..."01234567889"];
  var temNumero = numeros.some((numero) => senha.includes(numero));
  if (!temNumero) {
    mensagensErro.push("A senha preciso conter ao menos um número.");
  }

  document.getElementById("mensagemErroSenha").innerHTML =
    mensagensErro.join("<br>");
}

function validarEmail() {
  var email = document.getElementById("inputEmail").value;
  mensagemErroEmail.innerHTML = ``;

  // valida se tem .com ou .br
  var finalEmailCom = email.endsWith(".com");
  var finalEmailBr = email.endsWith(".br");

  if (!finalEmailCom && !finalEmailBr) {
    mensagemErroEmail.innerHTML += `O e-mail não é válido. Deve terminar com '.com' ou '.br'. <br>`;
  }

  // valida se tem arroba
  var arroba = email.includes("@");

  if (!arroba) {
    mensagemErroEmail.innerHTML += `O e-mail não é válido. Deve conter '@'. <br>`;
  }
}

function validarNome() {
  var nome = document.getElementById("inputNome").value;
  mensagemErroNome.innerHTML = ``;

  var tamanhoNome = nome.length;

  // valida tamanho do nome
  if (tamanhoNome <= 3) {
    mensagemErroNome.innerHTML = `O nome precisa ter ao menos três caracteres.`;
    return;
  } else if (tamanhoNome > 45) {
    mensagemErroNome.innerHTML = `O nome passa do limite de caracteres.`;
    return;
  }
}

function mascaraData(event) {
  var input = document.getElementById("inputData");
  var data = input.value;
  var dataLength = data.length;

  // ano 4 - mes - dia 7
  if (event.key != "Backspace") {
      if (dataLength == 4 || dataLength == 7) {
          data += "-";
      }
      input.value = data; 
  }
}