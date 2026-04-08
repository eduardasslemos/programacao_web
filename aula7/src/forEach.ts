const frutas: string[] = ['Maçã', 'Banana', 'Uva'];


//ele sabe qual eh o item e qual
//eh o index por conta da ordem, n importa o
//nome da variavel, sempre o primeiro do for each eh
//o valor e o segundo eh o indice
frutas.forEach((item, index) => { 
    console.log (`${index}: ${item}`);
});

const numbers = [1, 2, 3, 4, 5];
let contador: number = 0;

//soma todos os números uns com os outros
//tipo 1 + 2 = 3, ai 3 + 3 = 6, 6 + 4 = 10
numbers.forEach(item => {
    console.log(contador += item);
});

//multiplica todos os números por 2
//1 = 2, 2 = 4,
numbers.forEach((n, index) => {
    console.log(`${numbers[index]} = ${n * 2}`);
});

type Produto = {id: number, nome: string, preco: number}

const produtos: Produto[] = [
    {id: 1, nome: 'Mouse', preco: 50},
    {id: 2, nome: 'Teclado', preco: 150 }
];

produtos.forEach(p => {
    p.nome = p.nome + 'Qualquer coisa';
});

let totalVendas = 0;
const precos: number[] = [10.5, 20.0, 5.25];

precos.forEach(preco => {
    //efeito colateral : altera variavel externa
    totalVendas += preco;
});

console.log(`O total é: ${totalVendas}`);