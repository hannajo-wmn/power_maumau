const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["7", "8", "9", "10", "J", "Q", "K", "A"];


class Card {
    constructor(cardName, suit, value) {
        this.cardName = cardName
        this.suit = suit;
        this.value = value;
        this.path;  
    }
};

class Deck {
    constructor() {
        this.deck = []
        this.hand1 = []
        this.hand2 = []
        this.openStack = []
        this.hiddenStack = []
    };

    // generateDeck() creates a deck-array with 32 card objects in it
    generateDeck() {
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.deck.push(new Card(suits[i]+values[j], suits[i], values[j]))
            }
        };

        for (let k = 0; k < this.deck.length; k++) {
            this.deck[k].path = `./img/${this.deck[k].cardName}.png`
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

    // distributes Deck into two sets of carts for players, an open stack and a hidden stack
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

    // cleans deck and stack arrays, removes cards from the DOM
    cleanUp() {
        this.deck = [];
        this.hand1 = []; this.removeAllChildNodes(document.getElementById("hand1"));
        this.hand2 = []; this.removeAllChildNodes(document.getElementById("hand2"));
        this.openStack = []; this.removeAllChildNodes(document.getElementById("openStack"));
        this.hiddenStack = [];
    }

    newGame() {
        this.cleanUp();
        this.generateDeck();
        this.shuffleDeck(this.deck);
        console.log(JSON.parse(JSON.stringify(this.deck)))
        this.dealCards(this.deck);
        this.renderGame(this.hand1, this.hand2, this.openStack, this.hiddenStack)
    }
}

const newDeck = new Deck();
console.log(newDeck.deck)
document.getElementById("btnNewGame").addEventListener("click", () => newDeck.newGame())


