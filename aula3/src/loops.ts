for(let i = 0; i < 5; i++){
    console.log(`Iteração: ${i}`);
}

let contador = 0;
while(contador < 5){
    console.log("Iteração: ", contador);
    contador++;
}
//tanto o while, quanto o do while, precisam de incrementos
let num = 5;
do{
    console.log("Números: ", num);
    num++;
}while(num < 5);

//for...of percorre elementos de um array ou outra estrutura iterável.
const numeros: number[] = [10, 20, 30];
for(const num of numeros){
    console.log("Numeros: ", num);
}

/*for...in percorre as chaves (índices ou propriedades) de
um objeto ou array*/
const pessoa = {nome: "Alice", idade: 25, cidade: "Boituva"};
for(const chave in pessoa){
    console.log(`${chave}: ${pessoa[chave as keyof typeof pessoa]}`);
}