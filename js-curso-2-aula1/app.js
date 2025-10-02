let numeroScreto = gerarNumero();

console.log(numeroScreto);

exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número de 1 e 1 0');

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value
    console.log('Funciona');
}

function gerarNumero() {
    return parseInt(Math.random() * 10 + 1);
}