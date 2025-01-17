document.querySelector('#addTaskButton').onclick = function() {
    const tarefas = document.querySelector('#taskInput').value
    const lista = document.querySelector('.task-list');

    if (tarefas === ''){
        alert('Adicione alguma tarefa');
    }

    lista.innerHTML += `<li>${tarefas}</li>`;
}