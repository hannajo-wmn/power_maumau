import valid from "./valid.js";


const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["7", "8", "9", "10", "J", "Q", "K", "A"];

class Card {
    constructor(cardName, suit, value) {
        this.cardName = cardName;
        this.suit = suit;
        this.value = value;
        this.path;  
    }
};

class Game {
    constructor() {
        this.deck = [];
        this.hand1 = [];
        this.hand2 = [];
        this.openStack = [];
        this.hiddenStack = [];
        this.turn = null;
        this.topOfOpenStack = [];
        this.moveLivesOn = false;
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
        this.topOfOpenStack = this.openStack[this.openStack.length - 1]
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

    getCard = (e) => {
        console.log(e.target.closest('div').id)
        return e.target.closest('div').id
    }

    // cleans deck and stack arrays, removes cards from the DOM
    cleanUp() {
        this.deck = [];
        this.hand1 = []; this.removeAllChildNodes(document.getElementById("hand1"));
        this.hand2 = []; this.removeAllChildNodes(document.getElementById("hand2"));
        this.openStack = []; this.removeAllChildNodes(document.getElementById("openStack"));
        this.topOfOpenStack = [];
        this.hiddenStack = [];
        document.getElementById("hand1").removeEventListener("click", (e) => this.playerMove("discard", this.getCard(e)))
        document.getElementById("hand2").removeEventListener("click", (e) => this.playerMove("discard", this.getCard(e)))
        this.turn = null;
        this.moveLivesOn = false;
    };

    determineBeginner() {
        let players = ["player1", "player2"];
        var index = Math.floor(Math.random() * players.length);
        let chosenPlayer = players[index];
        this.turn = chosenPlayer;
        console.log(chosenPlayer, "begins.");
    };

    // Game setup routine: clean up, generate deck, shuffle, deal cards, render, determine and announce beginner
    newGame() {
        this.cleanUp();
        this.generateDeck();
        this.shuffleDeck(this.deck);
        console.log(JSON.parse(JSON.stringify(this.deck)))
        this.dealCards(this.deck);
        this.renderGame(this.hand1, this.hand2, this.openStack, this.hiddenStack);
        document.getElementById("hand1").addEventListener("click", (e) => this.playerMove("discard", this.getCard(e)));
        document.getElementById("hand2").addEventListener("click", (e) => this.playerMove("discard", this.getCard(e)));
        document.getElementById("hiddenStack").addEventListener("click", () => this.playerMove("draw"));
        this.determineBeginner()
        document.getElementById("message").innerHTML = `${this.turn} begins.`
    }

    playerMove(type, cardId) {
        
        // assigns appropriate hand stack to player
        let playingHand = this.turn === "player1"? this.hand1 : this.hand2

        if (type === "draw") {
            // check if player really has to draw
            let legalMoveExists = () => playingHand.some((element) => valid[element.cardName][this.topOfOpenStack.cardName])
            if (legalMoveExists()) {
                document.getElementById("message").innerHTML = `If a valid move exists, you have to do it. It's ${this.turn}'s turn.`
                return
            }
            // delete card from hidden stack and push to player hand
            let drawnCard = this.hiddenStack.splice(-1, 1)[0] // COME BACK HERE
            console.log("drawnCard is : ", JSON.stringify(drawnCard), drawnCard.cardName)
            playingHand.push(drawnCard)
            console.log("playingHand is ", JSON.stringify(playingHand))

            // update DOM
            let div = document.createElement("DIV");
            div.setAttribute("class", "playercards");
            div.setAttribute("id", drawnCard.cardName);
            let img = document.createElement("IMG");
            img.src = drawnCard.path;

            div.appendChild(img);
            let playingHandDIV = this.turn === "player1" ? "hand1" : "hand2"
            document.getElementById(playingHandDIV).appendChild(div);

            // determine if player is allowed to make another move and announce if so
            if (legalMoveExists()) {
                this.moveLivesOn = true;
                document.getElementById("message").innerHTML = `You have a card to discard now, ${this.turn}`
            } else {
                this.moveLivesOn = false
                this.turn = this.turn === "player1"? "player2" : "player1"
                document.getElementById("message").innerHTML = `It's ${this.turn}'s turn.`
                return
            }

        } else if (type === "discard") {

            // check which players turn it is and if card is in the appropriate hand
            if (this.turn === "player1") {
                if (!this.hand1.some((element) => element.cardName === cardId)) {
                    console.log("It's not your turn, player 2")
                    return
                }
            } else if (this.turn === "player2") {
                if (!this.hand2.some((element) => element.cardName === cardId)) {
                    console.log("It's not your turn, player 1")
                    return
                }
            }

            
            if (!valid[cardId][this.topOfOpenStack.cardName]) {
                document.getElementById("message").innerHTML = `You can't discard this card right now, ${this.turn}.`
                return
            }

            if (valid[cardId][this.topOfOpenStack.cardName]) {

                console.log(`${cardId} on ${this.topOfOpenStack.cardName} is valid.`)

                // find Index of clicked card in hand array
                const index = playingHand.findIndex(element => element.cardName === cardId);
                console.log(`Index in ${playingHand} is`, index)
                
                // delete card from hand and push it to open stack
                const card = playingHand.splice(index, 1);
                console.log("Card Object is: ", JSON.stringify(card))
                console.log("Open Stack before push is: ", JSON.stringify(this.openStack))
                this.openStack.push(card[0])
                console.log("Open Stack after pushing is: ", JSON.stringify(this.openStack))

                this.topOfOpenStack = this.openStack[this.openStack.length - 1]
                console.log("The top of open Stack is now: ", JSON.stringify(this.topOfOpenStack))
                
                // update DOM
                document.getElementById(cardId).remove()
                const openCard = document.getElementById("openStack").firstChild.firstChild;
                openCard.src = this.topOfOpenStack.path;
                document.getElementById("openStack").firstChild.setAttribute("id", this.topOfOpenStack.cardName)
            }
        }

        // check after move: Special rule I: Eight on top of open Stack
        if (this.topOfOpenStack.value === "8" && this.moveLivesOn === false) {
            document.getElementById("message").innerHTML = `A card with value 8 requires a 9 or 10. You have to discard a 9 or 10 or draw a card.`
            this.moveLivesOn = true;
            return
        } else if (this.topOfOpenStack.value === "8" && this.moveLivesOn === true) {
            this.moveLivesOn = false
            this.turn = this.turn === "player1"? "player2" : "player1"
            document.getElementById("message").innerHTML = `It's ${this.turn}'s turn.`
            return
        }

        // check after move: Special rule II: Ace
        if (this.topOfOpenStack.value === "A") {
            document.getElementById("message").innerHTML = `An Ace requires a card of the same suit or another Ace. You have to discard an appropriate card or draw, ${this.turn}`
            this.moveLivesOn = true;
            return
        }

        // change this.turn to other player when indicated
        this.moveLivesOn = false;
        this.turn = this.turn === "player1"? "player2" : "player1"
        document.getElementById("message").innerHTML = `It's ${this.turn}'s turn.`
    }
}

const newGame = new Game();
console.log(newGame.deck)
document.getElementById("btnNewGame").addEventListener("click", () => newGame.newGame())

// global context for debugging
window.newGame = newGame
