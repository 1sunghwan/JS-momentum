let form = document.querySelector('.js-to-do'),
    input = document.querySelector('.js-add-to-do'),
    list = document.querySelector('.js-list');

let toDos = [];    

function handleDelete(e){
    let xBtn = e.target;
    let li = xBtn.parentElement;
    let ul = li.parentElement;
    ul.removeChild(li);
    toDos = toDos.filter(function (v){
        return v.id !== parseInt(li.id);
    })
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

function saveToDoObj(text){
    let toDoObject = {
        id : toDos.length + 1,
        text : text
    }
    toDos.push(toDoObject);
}

function addToDos(text){
    let li = document.createElement('li');
    li.id = toDos.length + 1;
    li.className = 'js-li';
    let deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = '❌';
    deleteBtn.className = 'deleteBtn';
    deleteBtn.addEventListener('click', handleDelete);
    let label = document.createElement('label');
    label.innerHTML = text;
    li.appendChild(deleteBtn);
    li.appendChild(label);
    list.appendChild(li);
    saveToDoObj(text);
    localStorage.setItem('toDos', JSON.stringify(toDos));
    
}   

function loadToDos(){
    let getToDo = localStorage.getItem('toDos');
    if(getToDo !== null){
        JSON.parse(getToDo).forEach(function(e){
            addToDos(e.text);
        })
    }
    return;
}

function onSubmit(e){
    e.preventDefault();
    let value = input.value;
    input.value = '';
    addToDos(value);
}

function init(){
    loadToDos();
}

form.addEventListener('submit', onSubmit);
init();
