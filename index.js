import valid from "./valid.js";
console.log("I imported valid.js ", valid);


const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["7", "8", "9", "10", "J", "Q", "K", "A"];


/*
const valid = {
    "spades7": {
        "diamonds7": true,
        "diamonds7": true,
        "diamonds10": true,
    },
    "spades8": {
        "diamonds7": true,
        "diamonds7": true,
        "diamonds10": true,
    }
}

valid["spades7"]["diamonds10"]
*/

class Card {
    constructor(cardName, suit, value) {
        this.cardName = cardName
        this.suit = suit;
        this.value = value;
        this.path;  
    }
};

class Game {
    constructor() {
        this.deck = []
        this.hand1 = []
        this.hand2 = []
        this.openStack = []
        this.hiddenStack = []
        this.turn = null
        this.topOfOpenStack = []
    };

    // generateDeck() creates a deck-array with 32 card objects in it
    generateDeck() {
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.deck.push(new Card(suits[i]+values[j], suits[i], values[j]))
            }
        };

        for (let k = 0; k < this.deck.length; k++) {
            this.deck[k].path = `/img/${this.deck[k].cardName}.png`
        }
        // console.log("This deck after generateDeck()")
        // console.log(JSON.parse(JSON.stringify(this.deck))) // makes a copy from this.deck after generating deck and logs the copy
    }

    // shuffles the deck with Durstenfeld Shuffle
    shuffleDeck(array) {
        for (let l = array.length - 1; l > 0; l--) {
            let j = Math.floor(Math.random() * (l + 1));
            [array[l], array[j]] = [array[j], array[l]];
        }
    }

    // distributes Deck into two sets of cards for players plus an open stack and a hidden stack
    dealCards(shuffledDeck) {
        this.hand1 = shuffledDeck.slice(0,9)
        this.hand2 = shuffledDeck.slice(9,18)
        this.openStack = [shuffledDeck[18]]
        this.hiddenStack = shuffledDeck.slice(19)

        console.log("hand 1: " + JSON.stringify(this.hand1))
        console.log("hand 2: " + JSON.stringify(this.hand2))
        console.log("openStack: " + JSON.stringify(this.openStack))
        console.log("hiddenStack: " + JSON.stringify(this.hiddenStack))
    }

    // renders the initial set up
    renderGame(hand1, hand2, openStack) {
        hand1.forEach(card => {
            let div = document.createElement("DIV");
            div.setAttribute("class", "playercards");
            div.setAttribute("id", card.cardName)
            let img = document.createElement("IMG");
            img.src = card.path;

            div.appendChild(img);
            document.getElementById('hand1').appendChild(div);
        });

        hand2.forEach(card => {
            let div = document.createElement("DIV");
            div.setAttribute("class", "playercards");
            div.setAttribute("id", card.cardName);
            let img = document.createElement("IMG");
            img.src = card.path;

            div.appendChild(img);
            document.getElementById('hand2').appendChild(div);
        });

        openStack.forEach(card => {
            let div = document.createElement("DIV");
            div.setAttribute("class", "openStack");
            div.setAttribute("id", card.cardName);
            let img = document.createElement("IMG");
            img.src = card.path;

            div.appendChild(img);
            document.getElementById("openStack").appendChild(div);
        });
    }

    // little helper method for removing all appended children from an element
    removeAllChildNodes(parent) {
        if (parent === undefined) {
            return;
        }

        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    };

    getCard = (e) => console.log(e.target.closest('div').id)

    // cleans deck and stack arrays, removes cards from the DOM
    cleanUp() {
        this.deck = [];
        this.hand1 = []; this.removeAllChildNodes(document.getElementById("hand1"));
        this.hand2 = []; this.removeAllChildNodes(document.getElementById("hand2"));
        this.openStack = []; this.removeAllChildNodes(document.getElementById("openStack"));
        this.hiddenStack = [];
        document.getElementById("hand1").removeEventListener("click", this.getCard)
        document.getElementById("hand2").removeEventListener("click", this.getCard)
    };

    determineBeginner() {
        let players = ["player1", "player2"];
        var index = Math.floor(Math.random() * players.length);
        let chosenPlayer = players[index];
        this.turn = chosenPlayer
        console.log(chosenPlayer, "begins.");
    };

    // Game setup routine: clean up, generate deck, shuffle, deal cards, render, determine beginner
    newGame() {
        this.cleanUp();
        this.generateDeck();
        this.shuffleDeck(this.deck);
        console.log(JSON.parse(JSON.stringify(this.deck)))
        this.dealCards(this.deck);
        this.renderGame(this.hand1, this.hand2, this.openStack, this.hiddenStack);
        document.getElementById("hand1").addEventListener("click", this.getCard);
        document.getElementById("hand2").addEventListener("click", this.getCard);
        this.determineBeginner()
    }

    checkLegitimacy(discardCard, topOfOpenStack) {
        if (valid[discardCard][topOfOpenStack]) {
            return true
        }
    }

    discardCard(cardId) {
        // checkLegitimacy()
        const index = this.hand1.findIndex(element => element.cardName === cardId);
        console.log("Index in hand1 is: ", index)

        const card = this.hand1.splice(index, 1);
        console.log("Card Object is: ", JSON.stringify(card))

        console.log("Open Stack before push is: ", JSON.stringify(this.openStack))
        this.openStack.push(card[0])
        console.log("Open Stack after pushing is: ", JSON.stringify(this.openStack))

        this.topOfOpenStack = this.openStack[this.openStack.length - 1]
        console.log("The top of open Stack is now: ", JSON.stringify(this.topOfOpenStack))
        // remove Card DIVs from DOM

        // this.renderGame(this.hand1, this.hand2, this.openStack, this.hiddenStack)
    }

}

const newGame = new Game();
console.log(newGame.deck)
document.getElementById("btnNewGame").addEventListener("click", () => newGame.newGame())


