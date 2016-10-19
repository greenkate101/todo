var li = document.createElement('li'),
    remove = document.createElement('button'),
    toDo = document.querySelector('.todo'),
    input = document.querySelector('input'),
    id = 0,
    // containers for ToDo items
    filterComplete = [],
    filterIncomplete = [],
    filterAll = [filterComplete, filterIncomplete];

    // object constructor to match <li> ToDo items
function ToDoItem(content, id) {
    this.content = content;
    this.id = id;
}

input.addEventListener('keypress', function (event) {
    var li = document.createElement('li'),
        remove = document.createElement('button');
    if (13 === event.keyCode) {

        // create and append typed content into new <li>
        li.textContent = input.value;
        li.classList.add('todo-item');
        li.id = 'td' + id++;
        toDo.appendChild(li);

        // create new ToDo item object and store in Incomplete array
        filterIncomplete.push(new ToDoItem(input.value, li.id));

        // create and add remove/delete button
        remove.textContent = 'X';
        remove.classList.add('remove');
        li.appendChild(remove);

        // reset text input to empty
        input.value = '';
    }
});

// click to complete functionality
toDo.addEventListener('click', function (e) {
    if (e.target.matches('.todo-item')) {

        // move to filterComplete
        if (e.target.classList.contains('complete')) {
            filterComplete.forEach(function (value) {
                if (value.id === e.target.id) {
                    filterIncomplete.push(value);
                    filterComplete.splice(filterComplete.indexOf(value), 1);
                }
            });
        } else {
            filterIncomplete.forEach(function (value) {
                if (value.id === e.target.id) {
                    filterComplete.push(value);
                    filterIncomplete.splice(filterIncomplete.indexOf(value), 1);
                }
            });
        }

        // add complete class
        e.target.classList.toggle('complete');
    }
});

// delete button functionality
toDo.addEventListener('click', function (e) {
    if (e.target.matches('.remove')) {
        let id = e.target.parentElement.id,
            goAway = document.querySelector('#' + id);
        document.querySelector('#' + id).parentElement.removeChild(goAway);

        // delete from array
        if (e.target.classList.contains('complete')) {
            let index = filterComplete.findIndex((value) => value.id === id)
            filterComplete.splice(index, 1);
        } else {
            let index = filterIncomplete.findIndex((value) => value.id === id)
            filterIncomplete.splice(index, 1);
        }
    }
});

document.querySelector('.all').addEventListener('click', function () {
    for (var i = 0; i < filterIncomplete.length; i++) {
    console.log(filterIncomplete[i]);
    }
});

document.querySelector('.complete').addEventListener('click', function () {
    for (var i = 0; i < filterComplete.length; i++) {
    console.log(filterComplete[i]);
    }
});
