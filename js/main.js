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