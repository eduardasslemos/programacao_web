const numeros: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2];

const semDuplicados = numeros.filter((valor, indice, self)=>{
    //mantem o item apenas se for a primeira vez que ele aparece no array
    return self.indexOf(valor) === indice;
});

console.log(semDuplicados);

let numerosPares = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];

let pares = numerosPares.filter(n => n % 2 === 0);

console.log (pares) ; //[2 , 4 , 6 , 8]

let valores30 = [10 , 25 , 30 , 45 , 50];

let maiorQue30 = valores30.filter(n => n > 30);

console.log (maiorQue30); //[45 , 50]

let palavras = ["sol", "chuva", "trovão", "tempestade", "vento"];

let longas = palavras.filter (p => p.length > 5);

console.log (longas); //["trovão", "tempestade"]

let valores = [10, null, 25, undefined, 52, 89];

let valoresNaoNulos = valores.filter(v => v != null && v != undefined);

console.log(valoresNaoNulos); //[10, 25, 52, 89]

type Pessoa = {
    nome: string;
    idade: number;
}

const pessoas: Pessoa[] = [
    {nome: "Ferdinando", idade: 30},
    {nome: "Francis", idade: 98},
    {nome: "Carol", idade: 28},
    {nome: "Anisio", idade: 13},
]

let maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);

console.log(maioresDeIdade); //{nome: 'Ferdinando', idade: 30}, {nome: 'Francis', idade: 98}, {nome: 'Carol', idade: 28}