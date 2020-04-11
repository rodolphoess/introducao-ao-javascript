var nome = "Rodolpho Erick";
var idade = 29;
// alert("A idade de " + nome + " é " + idade + " anos.");

var primeiroValor = 3;
var segundoValor = 4.5;
console.log("Exemplo de soma: 3 + 4.5 = " + (primeiroValor + segundoValor));
console.log("Exemplo de concatenação: 3 + 4.5 = " + primeiroValor + segundoValor);


var primeiroValorString = "3";
var segundoValorString = "4.5";
// alert("Exemplo de concatenação de Strings: 3 + 4.5 = " + primeiroValorString + segundoValorString);

var frase = "Japão é a melhor seleção do mundo!";

// Exemplo de console.log() para visualizar no Console (F12).
console.log(nome);
console.log(idade);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());

var lista = ["Maçã", "Pêra", "Laranja"];
console.log(lista);
console.log(lista.reverse()); //Imprime os elementos da lista em ordem controária à inserção.
lista.push("Uva");
console.log(lista);
lista.pop(); //Retira o último elemento da lista.
console.log(lista);
console.log(lista.toString());
console.log(lista.toString()[0]); //Retorna cada letra da lista transformada em String.
console.log(lista.join(" - ")); //Transforma a lista em String e também é possível adicionar o separador entre elementos da lista.

var fruta = { nome: "Maçã", cor: "Vermelha" }; //Dicionário ou objeto JSON.
console.log(fruta);
console.log(fruta.nome);

var frutas = [{ nome: "Maçã", cor: "Vermelha" }, { nome: "Uva", cor: "Roxa" }]; //Dicionários ou objetos JSON.
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);

// var idade = prompt("Qual a sua idade?"); //Abre uma janela no browser para interação com o usuário.
// if (idade >= 18) {
//     console.log("Você é maior de idade!");
// } else {
//     console.log("Você é menor de idade!");
// }

var list = ["Alemanha", "Inglaterra", "Escócia"];
list.push("Polônia");
list.pop("Inglaterra");
console.log(list);

function soma(n1, n2) {
    return n1 + n2;
};
console.log(soma(1, 2));


function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }

    return validar;
};
// var idade = prompt("Qual a sua idade?");
var idade = 18;
console.log(validaIdade(idade));

function botao() {
    // alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!"; //Permite adicionar um HTML no elemento indicado pelo ID.
};

function redirecionarGuiaInvest() {
    window.open("https://www.guiainvest.com.br/login/");
};

function trocar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse. :)";
};

function voltar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
};

function load() {
    alert("Bem vindo! :)");
};

function change(elemento) {
    console.log(elemento.value);
};