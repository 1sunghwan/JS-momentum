let nameContainer = document.querySelector('.js-name');
let hello = ['Always Do Your best', 'Always Do Your best' , 'Always Do Your best'];

function paintName(name){
    nameContainer.innerHTML = '';
    let title = document.createElement('span');
    title.className = 'name__text';
    title.innerHTML = `${hello[parseInt(Math.random() * hello.length)]}, ${name}`;
    nameContainer.appendChild(title);
}

function handdleSubmit(e){
    e.preventDefault();
    let form = e.target;
    let input = form.querySelector('input');
    let value = input.value;
    localStorage.setItem('currentUser', value);
    paintName(value);
}

function paintInput(){
    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'what is your name?';
    input.className = 'name__input';
    let form = document.createElement('form');
    form.appendChild(input);
    form.addEventListener('submit', handdleSubmit);
    nameContainer.appendChild(form);
}

function loadName(){
    let User = localStorage.getItem('currentUser');
    if(User === null){
        paintInput();
    } else {
        paintName(User);
    }
}

function init(){
    loadName();
}
init();