//Exercício 3

const ListaDeTarefas = ["Lavar a louça", "Comprar leite"];
const tarefa = process.argv[2];

if (tarefa === undefined) {
    console.log("Adicione uma tarefa!")
} else {
    ListaDeTarefas.push(tarefa);
    console.log("Tarefa adicionada com sucesso!");
    console.log(ListaDeTarefas);  
}