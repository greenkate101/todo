var toDo = document.querySelector('.todo'),
    input = document.querySelector('input'),
    filterComplete = [],
    filterIncomplete = [],
    filterAll = [filterComplete, filterIncomplete];
function ToDoItem(content) {
        this.content = content;
        this.status = 'incomplete';
    }

input.addEventListener('keypress', function (event) {
    var li = document.createElement('li'),
        remove = document.createElement('button');
    if (13 === event.keyCode) {
        li.textContent = input.value;
        li.classList.add('todo-item');
        li.addEventListener('click', function () {
            li.classList.toggle('complete');
        })
        filterIncomplete.push(new ToDoItem(input.value));
        remove.textContent = 'X';
        toDo.appendChild(li);
        li.appendChild(remove);
        remove.addEventListener('click', function () {
            li.parentElement.removeChild(li);
        });
        input.value = ''
    }
})
