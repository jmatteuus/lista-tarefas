function recuperarTasks() {
    const tasksList = document.querySelector('#taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    tasksList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        tasksList.appendChild(li);
    });
}

const input = document.querySelector('#taskInput');

document.querySelector('#addTaskButton').onclick = function() {
    const task = input.value.trim();

    if (task !== '') {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        input.value = '';
        recuperarTasks();
    }
}

window.onload = recuperarTasks;