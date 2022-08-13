const cardArray = [
    {
        name: 'burger',
        img: 'assets/img/burger.png',
    },
    {
        name: 'coffee',
        img: 'assets/img/coffee.png',
    },
    {
        name: 'croissant',
        img: 'assets/img/croissant.png',
    },
    {
        name: 'donut',
        img: 'assets/img/donut.png',
    },
    {
        name: 'french-fries',
        img: 'assets/img/french-fries.png',
    },
    {
        name: 'hot-dog',
        img: 'assets/img/hot-dog.png',
    },
    {
        name: 'ice-cream',
        img: 'assets/img/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'assets/img/pizza.png',
    },
    // {
    //     name: 'soda',
    //     img: 'assets/img/soda.png',
    // },
    // {
    //     name: 'taco',
    //     img: 'assets/img/taco.png',
    // },
    {
        name: 'burger',
        img: 'assets/img/burger.png',
    },
    {
        name: 'coffee',
        img: 'assets/img/coffee.png',
    },
    {
        name: 'croissant',
        img: 'assets/img/croissant.png',
    },
    {
        name: 'donut',
        img: 'assets/img/donut.png',
    },
    {
        name: 'french-fries',
        img: 'assets/img/french-fries.png',
    },
    {
        name: 'hot-dog',
        img: 'assets/img/hot-dog.png',
    },
    {
        name: 'ice-cream',
        img: 'assets/img/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'assets/img/pizza.png',
    },
    // {
    //     name: 'soda',
    //     img: 'assets/img/soda.png',
    // },
    // {
    //     name: 'taco',
    //     img: 'assets/img/taco.png',
    // }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'assets/img/question.png');
        card.setAttribute('class', 'card-img');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch() {
    const cardImages = document.querySelectorAll('.card-img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        alert('You have clicked the same image!');
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cardImages[optionOneId].setAttribute('src', 'assets/img/accept.png');
        cardImages[optionTwoId].setAttribute('src', 'assets/img/accept.png');
        cardImages[optionOneId].removeEventListener('click', flipCard);
        cardImages[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cardImages[optionOneId].setAttribute('src', 'assets/img/question.png');
        cardImages[optionTwoId].setAttribute('src', 'assets/img/question.png');
        alert('Sorry');
    }

    resultDisplay.innerText = cardsWon.length;

    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == (cardArray.length / 2)) {
        resultDisplay.innerText = 'The best! Tiger!';
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}


document.querySelector('.btn').addEventListener('click', () => {
    document.location.reload()
})