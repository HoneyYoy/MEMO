let time = 0;
let timerInterval = null;
function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        document.getElementById('timer').innerText = 'время' + time + 'c';
    }, 1000)
}
   
const board = document.getElementById('board');


const cardArray = [
    'img/1.jpg',  'img/1.jpg',
   'img/2.jpeg','img/2.jpeg',
   'img/3.jpeg', 'img/3.jpeg',
    'img/4.webp', 'img/4.webp',
   'img/5.jpeg',   'img/5.jpeg',
    'img/6.webp',  'img/6.webp', 
   'img/7.webp' ,  'img/7.webp',
    'img/8.jpg' ,  'img/8.jpg',
    'img/9.jpeg',  'img/9.jpeg'
    
];

cardArray.sort(() => Math.random() - 0.5);

let firstCard = null;
let secondCard = null;
let canClick = true;

cardArray.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = 'img/back.jpg';
    img.dataset.src = src;
    img.id = 'card' + index;
    img.onclick = () => flipCard(img);
    board.appendChild(img);
});

function flipCard(img) {
    if (!canClick || img.src.includes(img.dataset.src)) return;
    img.src = img.dataset.src;
    if (!firstCard) {
        firstCard = img;
    } else {
        secondCard = img;
        canClick = false;
        setTimeout(checkMath, 800);
    }
}
function checkMath() {
    if(firstCard.dataset.src !== secondCard.dataset.src) {
        firstCard.src = 'img/back.jpg';
         secondCard.src = 'img/back.jpg';
    }
    firstCard = null;
    secondCard = null;
    canClick = true;
}

startTimer();