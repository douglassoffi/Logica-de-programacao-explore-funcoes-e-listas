let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() { 
    exibirTexto('h1', 'Jogo do número secreto'); 
    exibirTexto('p', 'Escolha um número entre 1 e 10'); I
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou');
        let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Voce descobriu o número com ${tentativas} ${palavra}`;
        exibirTexto('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > chute) {
            exibirTexto('p', 'É maior');
        } else {
            exibirTexto('p', 'É menor');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumero() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}