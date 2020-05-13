let body = document.querySelector('body');
let li = document.querySelector('.list');

const IMG_NUMBER = 4;

function addImage(imgNumber) {
    const image = new Image();
    image.src = `backgrounds/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    // image.addEventListener('loadend', handleImgload);
    body.prepend(image);
    if (imgNumber === 0 || imgNumber === 2) {
        body.style.color = '#ecf0f1';
    } else if (imgNumber === 3){
        body.style.color = 'black';
        li.style.color = 'white';
    }
     else {
        body.style.color = '#1e272e';
    };
}

function genRandom() {
    let number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    let randomNumber = genRandom();
    addImage(randomNumber);
}
init();

