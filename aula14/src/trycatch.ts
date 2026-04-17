// Exercício 1 - Analise o código abaixo e identifique o erro. Em seguida, reescreva-o
// com o tratamento adequado.

const notas: number[] = [1, 2, 3, 4, 5];

try{
    function calcularMedia (notas: number[]): number{
        let soma = 0;
        for (let i = 0; i < notas.length; i++){
            soma = soma + notas[i];
        }
        return soma / notas.length ;
    }
    calcularMedia(notas);
} catch (erro: unknown) {
    if (erro instanceof Error) {
        console.log ("Erro:", erro.message);
    }
}

// Exercício 2 - Identifique o problema no código abaixo. Corrija-o utilizando throw para
// validar corretamente os dados:


function cadastrarUsuario (nome: string, idade: number ){
    try {
        if (nome.length === 0 || idade < 0){
            throw new Error ("Dados inválidos.") ;
        }
        console.log ("Usuário cadastrado!");
    } catch(erro) {
        console . log (" Erro encontrado :", ( erro as Error ) . message ) ;
        return 0;
    }
}

// Exercício 3 - Corrija o código para que ele trate
// corretamente o erro lançado, utilizando unknown e verificação com instanceof:

function executarOperacao(){
    try {
        throw "Erro genérico";
    } catch (erro) {
        console.log ("Erro:", erro.message);
    }
}