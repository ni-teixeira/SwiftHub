var login = document.querySelector(".container-login");
var cadastro = document.querySelector(".container-cadastro");


function hidelogin() {
    login.style.display = "none";
    cadastro.style.display = "flex";
}

function hidecadastro() {
    login.style.display = "flex";
    cadastro.style.display = "none";
}