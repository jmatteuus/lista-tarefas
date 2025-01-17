const input = document.querySelector('#taskInput');

document.querySelector('#addTaskButton').onclick = function() {
    const task = input.value;

    if (task.trim() !== '') {
        const lista = document.querySelector('.task-list');
        lista.innerHTML += `<li>${task}</li>`;
        input.value = ''; 
    }
}