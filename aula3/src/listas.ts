let nomes: string[] = ["Ana", "Joao", "Elvis"];
console.log(nomes);

let numeros: number[] = [1, 2, 3, 4];
console.log("Numeros pos 1: ", numeros[1])
console.log(nomes.indexOf("João"));

nomes.splice(0,1); //primeiro numero eh a posicao do primeiro q vou excluir e o segundo eh quantas posicoes vou excluir a partir disso, como quero excluir a ana boto 0 (indice dela) e 1 (so quero excluir ela)
console.log("Depois do slice: ", nomes);

let years: Array< number > = [20, 30, 40];

let fruits: string[] = ["Banana", "Maçã"];

fruits.push("Pera"); //adicionando a pera nas frutas no final da lista
console.log(fruits);
fruits.unshift("Uva"); //adicionando a uva nas frutas no começo da lista
console.log(fruits);
fruits.pop(); //remove o ultimo elemento
fruits.shift(); //remove o primeiro elemento
console.log(fruits);
console.log(fruits.length); //mostra o tamanho