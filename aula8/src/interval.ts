//setInterval(() => console.log("Executando o interval"), 1000); // aparece dps, pois ele espera os 1000 milisegundos, e fica repetindo infinitamente pois n tem caso d parada, p parar manualmente tem q usar o ctrl c
//console.log("Depois do interval"); //aparece primeiro, pois n tem tempo

let contador = 0;

const interval = setInterval(() => {
    contador++;
    console.log("Rodando o interval..."); //vai rodar 3 vezes ate o contador ficar 3
    if(contador === 3){
        console.log("Interval cancelado..."); //ent ele sera cancelado
        clearInterval(interval);
    }
}, 700);

console.log("Depois do interval..."); //aparece primeiro