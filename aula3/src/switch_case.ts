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