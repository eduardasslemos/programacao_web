const numbers = [1, 2, 3, 4, 5];
const frutas: string[] = ['Maçã', 'Banana', 'Uva'];

frutas.forEach((item, index) => { //ele sabe qual eh o item e qual eh o index por conta da ordem, n importa o nome da variavel, sempre o primeiro do for each eh o valor e o segundo eh o indice
    console.log (`${index}: ${item}`);
});

let contador: number = 0;

numbers.forEach(item => {
    contador += item;
});

numbers.forEach((n, index) => {
    numbers[index] = n * 2;
});

type Produto = {id: number, nome: string, preco: number}
const produtos: Produto[] = [
    {id: 1, nome: 'Mouse', preco: 50},
    {id: 2, nome: 'Teclado', preco: 150 }
];

produtos.forEach( p => {
    p.nome = p.nome + 'Qualquer coisa';
});