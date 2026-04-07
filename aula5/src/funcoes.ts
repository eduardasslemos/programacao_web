/*funcao pede por uma variavel tipo string e vai
devolver algo do tipo string*/
function mensagem (f: string): string{
    return f; //so retorna a variavel
}

const mensagemLambda = (f: string): string => f;

/*pede duas variaveis do tipo number, mas eh uma
funcao do tipo void pq retorna um console.log*/
function soma(a: number, b: number):void{
    console.log(a + b);
}

const somaLambda = (a: number, b: number): void => console.log(a + b);

//visitante eh o default, oq aparece quando n tem nenhum outro valor
function saudacao(nome: string= "Visitante"): string{
    return `Olá, ${nome}`;
}

const saudacaoLambda = (nome: string= "Visitante"): string => `Olá, ${nome}`;

function multiplicacao(a: number, b: number): number{
    return a * b;
}

const multiplicacaoLambda = (a: number, b: number): number => a * b;

//teste das funcoes

console.log(mensagem("Oi!"));
console.log(mensagemLambda("Oi!"));

soma(5, 3);
somaLambda(5, 3);

console.log(saudacao("ADS"));
console.log(saudacao());
console.log(saudacaoLambda("ADS"));
console.log(saudacaoLambda());

console.log(multiplicacao(5, 2));
console.log(multiplicacaoLambda(5, 2));


//valores opcionais

//b eh opcional
const multiplicarOpcional = (a: number, b?: number): number => {
    if(b === undefined){
        return a;
    } else {
        return a * b;
    }
}

console.log(multiplicarOpcional(2));
console.log(multiplicarOpcional(2, 3));

//operador ternario

//se o b for indefinido ele retorna a, agr se n for, ele retorna a * o valor do b
const multiplicarOpTernario = (a: number, b?: number): number => (b === undefined) ? a : a * b;

console.log(multiplicarOpTernario(5));
console.log(multiplicarOpTernario(5, 2));

//operador coalescencia nula

//se o b for indefinido ele sera 1
const multiplicarCoalescencia = (a: number, b?: number): number => a * (b ?? 1);

console.log(multiplicarCoalescencia(3));
console.log(multiplicarCoalescencia(3, 2));