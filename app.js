let todos = [];

    function addTodo() {
      const todoInput = document.getElementById('todoInput');

      const todo = todoInput.value.trim();

      if (todo !== '') {
        todos.push(todo);
        updateDisplay();
      }


      todoInput.value = '';
    }

    function deleteInput() {
      const todoInput = document.getElementById('todoInput');
      todoInput.value = ''; 
    }

    function updateDisplay() {
      const todoList = document.getElementById('todoList');

      
      todoList.innerHTML = '';

      
      todos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todoItem');

        const todoText = document.createElement('span');
        todoText.textContent = todo;

        const buttonContainer = document.createElement('div');

        const editButton = document.createElement('button');
        editButton.classList.add('editButton');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTodo(index);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTodo(index);

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        todoItem.appendChild(todoText);
        todoItem.appendChild(buttonContainer);

        todoList.appendChild(todoItem);
      });
    }

    function editTodo(index) {
      const updatedTodo = prompt('Edit ToDo:', todos[index]);

      if (updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        updateDisplay();
      }
    }

    function deleteTodo(index) {
      const confirmDelete = confirm('Are you sure you want to delete this ToDo?');

      if (confirmDelete) {
        todos.splice(index, 1);
        updateDisplay();
      }
    }