import promptSync from "prompt-sync";

const prompt = promptSync();

const nome: string = prompt("Digite seu nome: ");
const idade: number = Number(prompt("Digite seu nome: "));

console.log(`Ola, ${nome}! Voce tem ${idade} anos.`);