console.log("Antes do SetTimeout"); //ocorrem juntos

let frase = "Rodando o setTimeout";

const timeout = setTimeout(() => console.log("Executando o timeout"), 2000); //ocorre dps, pois espera os 2000 milisegundos, ent aparece por ultimo

frase = "Rodando o clearTimeout";

if(frase !== "Rodando o setTimeout"){ //tiemout eh "cancelado" pq a frase mudou
    clearTimeout(timeout); //timeout n aparece mais
    console.log(frase); //mostra a frase atual
}

console.log("Depois do SetTimeout"); //ocorrem juntos