const numbers = [22, 11, 7, 80, 1, 2, 3, 4, 5];

console.log(numbers);
console.log(numbers.sort()); //segue 1, depois tudo oq tem 1 no comeco, ex: vetor tem 11, 2, 1, ele ordena 1, 11, 2
console.log(numbers.sort((a, b) => a - b)); //crescente
console.log(numbers.sort((a, b) => b - a)); //decrescente

const arquivos: string[] = ["item10,png", "item01,png", "item09,png", "item02,png"];
console.log(arquivos);
arquivos.sort((a, b) => a.localeCompare(b)); //organiza em ordem
console.log(arquivos);

"anisio".localeCompare("ANISIO", undefined, {sensitivity: 'base'}); //compara as duas palavras sem se importar com letra maiuscula e minuscula
"teste".toLowerCase().localeCompare("TESTE".toLowerCase()); //transforma as duas palavras compadas em letras minusculas