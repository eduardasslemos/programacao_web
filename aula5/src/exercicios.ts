/* Implemente uma função chamada maiuscula que receba um parâmetro do tipo string e retorne o
seu conteúdo totalmente em letras maiúsculas.
Para este exercício, apresente duas variantes de implementação:
1. Utilizando a sintaxe de função tradicional (function);
2. Utilizando a sintaxe de arrow function (expressão lambda).
Dica: No ecossistema JavaScript/TypeScript, strings possuem o método nativo .toUpperCase()
para esta finalidade. */

function maiuscula (f: string): string{
    return f.toUpperCase();
}

const maisuculaLambda = (f: string): string => {return f.toUpperCase()};


console.log(maiuscula("banana"));
console.log(maisuculaLambda("kiwi"));

//Crie uma função elevar que recebe dois números e retorna o resultado da exponenciação o entre eles.

function elevar (a: number, b: number): number{
    return a ** b;
}

console.log(elevar(2, 3));

//Crie uma função chamada dobrarNumeros que recebe um array de números e retorna um novo array com todos os valores multiplicados por 2.

const numeros: number [] = [1, 2, 3, 4, 5, 6, 7, 8];

function dobrarNumeros (numeros: number[]): number[]{
    const numerosDobrados: number [] = [];
    for(let i = 0; i < numeros.length; i++){
        numerosDobrados[i] = numeros[i]! * 2; //o ! mostra q o numeros[i] nao eh undefined, pq estava dando erro nisso
    }
    return numerosDobrados;
}

console.log(dobrarNumeros(numeros));

//Dado um array de funcionários, escreva uma função que utilize filter() para retornar apenas aqueles que possuem um cargo especifico, usando tipos TypeScript.

type Funcionario = {
    nome : string ;
    cargo : string ;
};

const funcionarios : Funcionario [] = [
{ nome : " Marcos ", cargo : " Desenvolvedor " } ,
{ nome : " Fernanda ", cargo : " Gerente " } ,
{ nome : " Carlos ", cargo : " Desenvolvedor " } ,
{ nome : " Joana ", cargo : " Analista " }
];

const cargoDesejado : string = " Desenvolvedor ";

function cargoEspecifico (funcionarios: Funcionario[], cargoDesejado: string): Funcionario[]{
    return funcionarios.filter(funcionario => funcionario.cargo == cargoDesejado);
}

console.log(cargoEspecifico(funcionarios, cargoDesejado));

//Dado um array de alunos e suas respectivas notas, escreva uma função tipada que utilize filter() para retornar apenas os alunos aprovados.

type Aluno = {
    nome : string ;
    nota : number ;
};

const alunos : Aluno [] = [
{ nome : " Alice ", nota : 8 } ,
{ nome : " Bruno ", nota : 5 } ,
{ nome : " Carla ", nota : 7 } ,
{ nome : " Daniel ", nota : 6 }
];

function aprovados (alunos: Aluno[]): Aluno[]{
    return alunos.filter(aluno => aluno.nota >= 6);
}

console.log(aprovados(alunos));

//Dado um array de eventos tipados, filtre apenas aqueles que ocorrem em um determinado mês.

type Evento = {
    nome : string ;
    mes : string ;
};

const eventos : Evento [] = [
{ nome : " Workshop TypeScript ", mes : " Janeiro " } ,
{ nome : " Hackathon ", mes : "Mar ço" } ,
{ nome : " Confer ê ncia de IA", mes : " Janeiro " }
];

const mesDesejado : string = " Janeiro ";

function mesEspecifico (eventos: Evento[], mesDesejado: string): Evento[]{
    return eventos.filter(evento => evento.mes == mesDesejado);
}

console.log(mesEspecifico(eventos, mesDesejado));