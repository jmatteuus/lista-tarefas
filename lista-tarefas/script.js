document.querySelector('#addTaskButton').onclick = function() {
    const tarefas = document.querySelector('#taskInput').value
    const lista = document.querySelector('#taskList');

    lista.textContent += tarefas;
}