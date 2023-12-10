const card = document.querySelectorAll('.card');
const phoneNum = document.querySelector('#text');

const btn = document.querySelector('#resetBtn').addEventListener('click', resetBoard);
shuffle();

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let numberDisplayed = "";

function flipcard() {
    if (lockBoard) return;
    if (this == firstCard) return;
    this.classList.add('flip');

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkMatch();
}

function checkMatch() {
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        numberDisplayed = numberDisplayed.concat(firstCard.dataset.framework);
        console.log(numberDisplayed);
        display(numberDisplayed);
        //disableCard();
        unflipCards();
        //setTimeout(() => {
            //shuffle();
        //}, 2000);
        return;
    }

    unflipCards();
}

function disableCard() {
    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click', flipcard);

    reset();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        reset();
    }, 1500);
}

function reset() {
    [hasFlippedCard, lockBoard] = [false,false];
    [firstCard, secondCard] = [null,null];
}

function shuffle() {
    card.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 24);
        card.style.order = randomPosition;
    });
}

function display(num) {
    phoneNum.textContent = num;
}

function resetBoard () {
    phoneNum.textContent= "";
    numberDisplayed= "";
    shuffle();
    
}



card.forEach(card => card.addEventListener('click', flipcard));