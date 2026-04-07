//lista de números
let numeros: number[] = [1, 2, 3, 4];

//lista de strings
let nomes: string[] = ["Ana", "João", "Elvis"];
console.log(nomes);
//indexOf retorna o indíce do elemento na lista, nesse caso 1
let posJoao: number = nomes.indexOf("João");
/*primeiro numero eh a posicao do primeiro q vou excluir e o
segundo eh quantas posicoes vou excluir a partir disso, como
quero excluir o joão boto o posJoao que guarda o indíce
dele (1) e depois 1 (so quero excluir ele)*/
nomes.splice(posJoao,1);
console.log("Depois do slice: ", nomes);

//lista genérica (Array <tipo>)
let idades: Array < number > = [20, 30, 40];

//lista com tipos mistos (usando Union Types)
let misto: (number | string) [] = [1, "dois", 3, "quatro"];

let fruits: string[] = ["Banana", "Maçã"];

fruits.push("Pera"); //adicionando a pera nas frutas no final da lista
fruits.unshift("Uva"); //adicionando a uva nas frutas no começo da lista
console.log(fruits);
fruits.pop(); //remove o ultimo elemento
fruits.shift(); //remove o primeiro elemento
console.log(fruits);
console.log(fruits.length); //mostra o tamanho da lista