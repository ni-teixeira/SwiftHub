let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

// calcula a quantidade total de itens no slider, subtraindo 1 para obter o índice máximo
let lengthItems = items.length - 1;
let active = 0;

// função executada ao clicar no botão "next"
next.onclick = function() {
    // incrementa o índice ativo, reiniciando para 0 caso alcance o final
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

// função executada ao clicar no botão "prev"
prev.onclick = function() {
    // decrementa o índice ativo, voltando para o último item se alcançar o início
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

// define um intervalo que automaticamente avança o slider a cada 5 segundos
let refreshInterval = setInterval(() => { next.click() }, 5000);

// função para atualizar o slider de acordo com o item ativo
function reloadSlider() {
    // ajusta a posição da lista do slider para alinhar o item ativo
    slider.style.left = -items[active].offsetLeft + 'px';
    
    // eemove a classe "active" do ponto anterior
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    // adiciona a classe "active" ao ponto correspondente ao item ativo
    dots[active].classList.add('active');

    // reinicia o intervalo de atualização automática ao recarregar o slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 3000);
}

// adiciona um evento de clique a cada ponto de navegação
dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        // define o índice ativo para o índice do ponto clicado
        active = key;
        reloadSlider();
    })
});

// eecarrega o slider automaticamente ao redimensionar a janela
window.onresize = function(event) {
    reloadSlider();
};