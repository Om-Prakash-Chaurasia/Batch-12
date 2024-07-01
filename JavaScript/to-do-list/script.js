document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodoItem(todoInput.value);
        // todoInput.value = '';
    });

    function addTodoItem(task) {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.textContent = task;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        if (todoItem.textContent != ' ') {
            todoItem.appendChild(todoItem);
        }

        todoList.appendChild(completeButton);
        todoItem.appendChild(deleteButton);
    }
});