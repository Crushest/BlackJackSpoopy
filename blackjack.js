
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let playerName = document.getElementById("player-name")
let chips = 100
let startback = document.getElementById("box")

let card2 =[
    "cards/2♠.png",
    "cards/2♣.png",
    "cards/2♥.png",
    "cards/2♦.png"
]
let card3 =[
    "cards/3♠.png",
    "cards/3♣.png",
    "cards/3♥.png",
    "cards/3♦.png"
]
let card4 =[
    "cards/4♠.png",
    "cards/4♣.png",
    "cards/4♥.png",
    "cards/4♦.png"
]
let card5 =[
    "cards/5♠.png",
    "cards/5♣.png",
    "cards/5♥.png",
    "cards/5♦.png"
]
let card6 =[
    "cards/6♠.png",
    "cards/6♣.png",
    "cards/6♥.png",
    "cards/6♦.png"
]
let card7 =[
    "cards/7♠.png",
    "cards/7♣.png",
    "cards/7♥.png",
    "cards/7♦.png"
]
let card8 =[
    "cards/8♠.png",
    "cards/8♣.png",
    "cards/8♥.png",
    "cards/8♦.png"
]
let card9 =[
    "cards/9♠.png",
    "cards/9♣.png",
    "cards/9♥.png",
    "cards/9♦.png"
]
let card10 =[
    "cards/10♠.png",
    "cards/10♣.png",
    "cards/10♥.png",
    "cards/10♦.png",
    "cards/K♠.png",
    "cards/K♣.png",
    "cards/K♥.png",
    "cards/K♦.png",
    "cards/J♠.png",
    "cards/J♣.png",
    "cards/J♥.png",
    "cards/J♦.png",
    "cards/Q♠.png",
    "cards/Q♣.png",
    "cards/Q♥.png",
    "cards/Q♦.png"
]
let cardA =[
    "cards/A♠.png",
    "cards/A♣.png",
    "cards/A♥.png",
    "cards/A♦.png"
]

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

function backgroundchange(){
    startup.style.display= "none";
}

playerName.addEventListener("keypress", function(event){
if (event.key === "Enter"){
    event.preventDefault();
    playerName.style.display="none";
    document.getElementById("visibility").style.visibility="visible";
    var person = document.getElementById("player-name").value;
    document.getElementById("player-el").innerHTML = person + ": $" + chips;
}
})
