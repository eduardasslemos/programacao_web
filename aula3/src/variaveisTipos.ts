//string = uma sequência de caracteres imutável
let nome: string = "Joao";
//number = valores numéricos, incluindo inteiros e decimais
let idade: number = 25;
//boolean = um valor lógico, podendo ser true (verdadeiro) ou false (falso)
let ativo: boolean = true;

//any = qualquer tipo de valor, oferecendo flexibilidade, mas reduzindo a segurança
let dado: any = 10;
//null = ausência intencional de valor
let vazio: null = null;
//uma variável não inicializada
let indefinido: undefined = undefined;

// Tipos literais (valores específicos)
let situacao: " ativo " | " inativo " = " ativo "; //só aceita esses dois valores

// União de tipos (Union Type)
let idadeOuNulo : number | null = null ; //permite que uma variável aceite mais de um tipo

let valor = 48;
console.log(typeof valor); //typeof = retorna uma string que indica o tipo da variavel