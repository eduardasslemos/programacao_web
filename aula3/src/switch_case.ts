let perfil: string = "admin";

switch(perfil){
    case "admin":
        console.log("Acesso total ao sistema.");
        break;
    case "usuario":
        console.log("Acesso limitado.");
        break;
    case "visita":
        console.log("Apenas leitura.");
        break;
    default:
        console.log("Perfil nao encontrado.");
}

/*o switch é uma estrutura de controle de fluxo
que avalia uma expressão e a compara com diferentes
cláusulas case. O comando break é crucial. Sem ele,
o código continua executando os próximos cases
mesmo que a condição já tenha sido satisfeita*/