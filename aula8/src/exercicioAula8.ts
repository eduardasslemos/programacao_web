type Tarefa = {
    descricao: string;
    prioridade: number;
    concluida: boolean;
};

const tarefas: Tarefa[] = [
{descricao: "Fazer relatório", prioridade: 2, concluida: false },
{descricao: "Enviar e-mail", prioridade: 3, concluida: false },
{descricao: "Reunião com equipe", prioridade: 1, concluida: false }
];

function imprimirTarefa(descricao: string, indice: number, totalTarefas: number): void{
    console.log (`Tarefa concluída: ${descricao}`) ;
    console.log (`Progresso: ${indice + 1}/ ${totalTarefas}`) ;
}

function executarTarefas(tarefas: Tarefa[], callback: (descricao: string, indice: number, totalTarefas: number) => void, timer: number = 1000){
    tarefas.sort((a, b) => b.prioridade - a.prioridade); //decrescente
    let contador = 0;

    const interval = setInterval(() => {
        if(contador >= tarefas.length || tarefas[contador]?.descricao === "Cancelar"){ //se o contador for maior doq a quantidade de coisas na tarefas ou a descricao da tarefa atual for cancelar ent paramos o interval
            clearInterval(interval);
        } else {
            const tarefa = tarefas[contador];
            if(tarefa){ //se n for nula entra no if
                tarefa.concluida = true; //muda a tarefa p concluida
                callback(tarefa.descricao, contador, tarefas.length); //mostra a funcao imprimir tarefa
                contador++; //aumenta +1 no contador
            }
        }
    }, timer);
}

executarTarefas(tarefas, imprimirTarefa, 1500);