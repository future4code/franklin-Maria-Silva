//Exercício 1

const nome = process.argv[2];
const idade = Number(process.argv[3]);
const mais7 = idade + 7;

console.log("Olá, " + nome + "!");
console.log("Você tem " + idade + " anos.");
console.log("Em sete anos você terá " + mais7 + " anos.");

//Questão 1: 
//Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//Através do process.argv[] e vemos através do console.log.
