import promptSync from "prompt-sync";

//inicialização da função prompt
const prompt = promptSync();

const nome: string = prompt("Digite seu nome: ");
const idade: number = Number(prompt("Digite sua idade: "));

//esse console.log vai exibir oq o usuario inseriu como nome e idade
console.log(`Ola, ${nome}! Voce tem ${idade} anos.`);

/*o prompt sempre retorna uma string, se precisar de numero:
Number(prompt("..."));*/