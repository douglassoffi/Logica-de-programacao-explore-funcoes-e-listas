// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botaoConsole() {
    console.log('O botão foi clicado');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function botaoAlerta() {
    alert('Eu amo JS');
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function botaoPrompt() {
    let cidade = prompt('Diga o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function botaoSoma() {
    let numero1 = parseInt(prompt('Escolha um número inteiro'));
    let numero2 = parseInt(prompt('Escolha um número inteiro'));
    let soma = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${soma}`);
}

// Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log('Olá, mundo!');
}
olaMundo();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
let nome = 'Jaime';
function olaNome(nome) {
    console.log(`Olá, ${nome}!`);
}
olaNome(nome);

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let numero = 10;
function dobraNumero(numero) {
    return numero * 2;
}
let resultado1 = dobraNumero(numero);
console.log(resultado1);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
let i = 1;
let j = 1;
let k = 1;
function media(i, j, k) {
    return (i + j + k) / 3;
}
let resultado2 = media(i, j, k);
console.log(resultado2);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
let l = 1
let m = 2
function maior(l, m) {
    return l > m ? l : m;
}
let resultado3 = maior(l, m);
console.log(resultado3);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
let n = 5;
function quadrado(n) {
    return n ** 2;
}
let resultado4 = quadrado(n);
console.log(resultado4)