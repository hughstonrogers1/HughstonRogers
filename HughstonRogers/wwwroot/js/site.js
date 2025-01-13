///*ToDo List JavaScript*/

//// JavaScript to handle adding, deleting, editing, and completing tasks
//const todoList = document.getElementById('todoList');
//const addItemForm = document.getElementById('addItemForm');
//const newItemInput = document.getElementById('newItemInput');

//// Add new item
//addItemForm.addEventListener('submit', (e) => {
//    e.preventDefault();
//    const newItemText = newItemInput.value.trim();
//    if (newItemText) {
//        const newItem = createTodoItem(newItemText);
//        todoList.appendChild(newItem);
//        newItemInput.value = '';
//    }
//});

//// Create a new ToDo item element
//function createTodoItem(text) {
//    const li = document.createElement('li');
//    li.className = 'todo-item';

//    const itemDiv = document.createElement('div');
//    const checkbox = document.createElement('input');
//    checkbox.type = 'checkbox';
//    checkbox.className = 'todo-checkbox mr-2';
//    const span = document.createElement('span');
//    span.className = 'todo-text';
//    span.textContent = text;
//    itemDiv.appendChild(checkbox);
//    itemDiv.appendChild(span);

//    const buttonDiv = document.createElement('div');
//    const editButton = document.createElement('button');
//    editButton.className = 'btn btn-sm btn-warning btn-edit';
//    editButton.textContent = 'Edit';
//    const deleteButton = document.createElement('button');
//    deleteButton.className = 'btn btn-sm btn-danger btn-delete';
//    deleteButton.textContent = 'Delete';
//    buttonDiv.appendChild(editButton);
//    buttonDiv.appendChild(deleteButton);

//    li.appendChild(itemDiv);
//    li.appendChild(buttonDiv);

//    // Mark item as completed
//    checkbox.addEventListener('change', () => {
//        li.classList.toggle('completed');
//    });

//    // Delete item
//    deleteButton.addEventListener('click', () => {
//        todoList.removeChild(li);
//    });

//    // Edit item
//    editButton.addEventListener('click', () => {
//        const newText = prompt('Edit your task:', text);
//        if (newText) {
//            span.textContent = newText;
//        }
//    });

//    return li;
//}
