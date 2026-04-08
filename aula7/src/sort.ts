//ordenação númerica
const numbers = [22, 11, 7, 80, 1, 2, 3, 4, 5];

console.log(numbers);
//segue 1, depois tudo oq tem 1 no comeco,
//ex: vetor tem 11, 2, 1, ele ordena 1, 11, 2
console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b)); //crescente
console.log(numbers.sort((a, b) => b - a)); //decrescente

//ordenação de objetos
type Pessoa = {nome: string; idade: number;}

const pessoas: Pessoa [] = [
    {nome: 'João', idade: 30},
    {nome: 'Maria', idade: 25}
];

//por idade (crescente)
pessoas.sort((a, b) => a.idade - b.idade);

//por nome (alfabética)
pessoas.sort((a, b) => a.nome.localeCompare(b.nome));

const arquivos: string[] = ["item10.png", "item2.png", "item1.png", "item20.png"];

arquivos.sort((a, b) => a.localeCompare(b));
console.log(arquivos); //['item1.png', 'item10.png', 'item2.png', 'item20.png']

arquivos.sort((a, b) =>
a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'})
);
console.log(arquivos); //['item1.png', 'item2.png', 'item10.png', 'item20.png']

//compara as duas palavras sem se importar com letra maiuscula e minuscula
"anisio".localeCompare("ANISIO", undefined, {sensitivity: 'base'});

//transforma as duas palavras compadas em letras minusculas
"teste".toLowerCase().localeCompare("TESTE".toLowerCase());