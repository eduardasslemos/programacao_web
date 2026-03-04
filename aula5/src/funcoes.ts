function mensagem (f: string): string{ //funcao pede por uma variavel tipo string e vai devolver algo do tipo string
    return f; //so retorna a variavel
}

console.log(mensagem("Olá, mundo!!!"));

function soma(a: number, b: number):void{ //pede uuas variaveis do tipo number, mas eh uma funcao do tipo void pq retorna um console.log
    console.log(a + b);
}

const somaLambda = (a: number, b: number): void => console.log(a + b);

soma(5, 3);

function saudacao(nome: string= "Visitante"): string{ //visitante eh o default, oq aparece quando n tem nenhum outro valor
    return `Olá, ${nome}`;
}

const saudacaoLambda = (nome: string= "Visitante"): string => `Olá, ${nome}`;

console.log(saudacao("ADS"));
console.log(saudacao());

function multiplicacao(a: number, b: number){
    return a* b;
}

//valores opcionais

const multiplicarOpcional = (a: number, b?: number): number => { //b eh opcional
    if(b === undefined){
        return a;
    } else {
        return a * b;
    }
}

console.log(multiplicarOpcional(2));
console.log(multiplicarOpcional(2, 3));

//operador ternario

const multiplicarOpTernario = (a: number, b?: number): number => (b === undefined) ? a: a * b; //se o b for indefinido ele retorna a, agr se n for, ele retorna a * o valor do b

console.log(multiplicarOpTernario(5));
console.log(multiplicarOpTernario(5, 2));

//operador coalescencia nula

const multiplicarCoalescencia = (a: number, b?: number): number => a * (b ?? 1); //se o b for indefinido ele sera 1

console.log(multiplicarCoalescencia(3));
console.log(multiplicarCoalescencia(3, 2));