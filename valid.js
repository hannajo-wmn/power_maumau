const valid = {
    // SPADES
    "spades7": {
        "spades7": true,
        "spadesQ":true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
        // After drawing: 7, Queen and also every other card in the same suit or a Jack
    },
    "spades8": {
        "spades9": true,
        "spades10":true,
        "diamonds9": true,
        "diamonds10": true,
        "clubs9": true,
        "clubs10": true,
        "hearts9": true,
        "hearts20": true,
    },
    "spades9": {
        "spades8": true,
        "spades9": true,
        "spades10":true,
        "diamonds9": true,
        "clubs9": true,
        "hearts9": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "spades7": true,
        "spadesQ": true,
        "spadesK": true,
        "spadesA": true,
    },
    "spades10": {
        "spades7": true,
        "spades8": true,
        "spades9": true,
        "spades10":true,
        "diamonds10": true,
        "clubs10": true,
        "hearts10": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "spadesQ": true,
        "spadesK": true,
        "spadesA": true,
    },
    "spadesJ": {
        // WISH
    },
    "spadesQ": {
        "spades7": true,
        "spadesQ":true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
        // After drawing: 7, Queen and also every other card in the same suit or a Jack
    },
    "spadesK": {
        "spades8": true,
        "spades7": true,
        "spades8": true,
        "spades9": true,
        "spades10": true,
        "spadesJ": true,
        "spadesQ": true,
        "spadesK": true,
        "spadesA": true,
    },
    "spadesA": {
        "spades8": true,
        "spades7": true,
        "spades8": true,
        "spades9": true,
        "spades10": true,
        "spadesJ": true,
        "spadesQ": true,
        "spadesK": true,
        "spadesA": true,
    },
    // DIAMONDS
    "diamonds7": {
        "spades7": true,
        "spadesQ":true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
        // After drawing: 7, Queen and also every other card in the same suit or a Jack
    },
    "diamonds8": {
        "spades9": true,
        "spades10":true,
        "diamonds9": true,
        "diamonds10": true,
        "clubs9": true,
        "clubs10": true,
        "hearts9": true,
        "hearts10": true,
    },
    "diamonds9": {
        "diamonds8": true,
        "diamonds9": true,
        "diamonds10": true,
        "spades9": true,
        "clubs9": true,
        "hearts9": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "diamonds7": true,
        "diamondsQ": true,
        "diamondsK": true,
        "diamondsA": true,
    },
    "diamonds10": {
        "diamonds8": true,
        "diamonds9": true,
        "diamonds10": true,
        "spades10": true,
        "clubs10": true,
        "hearts10": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "diamonds7": true,
        "diamondsQ": true,
        "diamondsK": true,
        "diamondsA": true,
    },
    "diamondsJ": {
        // WISH
    },
    "diamondsQ": {
        "spades7": true,
        "spadesQ":true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
        // After drawing: 7, Queen and also every other card in the same suit or a Jack
    },
    "diamondsK": {
        "diamonds7": true,
        "diamonds8": true,
        "diamonds9": true,
        "diamonds10": true,
        "diamondsJ": true,
        "diamonsQ": true,
        "diamondsK": true,
        "diamondsA": true,
    },
    "diamondsA": {
        "diamonds7": true,
        "diamonds8": true,
        "diamonds9": true,
        "diamonds10": true,
        "diamondsJ": true,
        "diamonsQ": true,
        "diamondsK": true,
        "diamondsA": true,
    },
    // CLUBS
    "clubs7": {
        "spades7": true,
        "spadesQ":true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
        // After drawing: 7, Queen and also every other card in the same suit or a Jack
    },
    "clubs8": {
        "spades9": true,
        "spades10":true,
        "diamonds9": true,
        "diamonds10": true,
        "clubs9": true,
        "clubs10": true,
        "hearts9": true,
        "hearts10": true,
    },
    "clubs9": {
        "clubs8": true,
        "clubs9": true,
        "diamonds9": true,
        "spades9": true,
        "hearts9": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "clubs7": true,
        "clubsQ": true,
        "clubsK": true,
        "clubsA": true,
    },
    "clubs10": {
        "clubs8": true,
        "clubs9": true,
        "clubs10": true,
        "spades10": true,
        "diamonds10": true,
        "hearts10": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "clubs7": true,
        "clubsQ": true,
        "clubsK": true,
        "clubsA": true,
    },
    "clubsJ": {
        // WISH
    },
    "clubsQ": {
        "spades7": true,
        "spadesQ":true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
        // After drawing: 7, Queen and also every other card in the same suit or a Jack
    },
    "clubsK": {
        "clubs7": true,
        "clubs8": true,
        "clubs9": true,
        "clubs10": true,
        "clubsJ": true,
        "clubsQ": true,
        "clubsK": true,
        "clubsA": true,
    },
    "clubsA": {
        "clubs7": true,
        "clubs8": true,
        "clubs9": true,
        "clubs10": true,
        "clubsJ": true,
        "clubsQ": true,
        "clubsK": true,
        "clubsA": true,
    },
    // HEARTS
    "hearts7": {
        "spades7": true,
        "spadesQ":true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
        // After drawing: 7, Queen and also every other card in the same suit or a Jack
    },
    "hearts8": {
        "spades9": true,
        "spades10":true,
        "diamonds9": true,
        "diamonds10": true,
        "clubs9": true,
        "clubs10": true,
        "hearts9": true,
        "hearts10": true,
    },
    "hearts9": {
        "hearts7": true,
        "hearts8": true,
        "hearts9": true,
        "hearts10": true,
        "clubs9": true,
        "diamonds9": true,
        "spades9": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "heartsQ": true,
        "heartsK": true,
        "heartsA": true,
    },
    "hearts10": {
        "hearts7": true,
        "hearts8": true,
        "hearts9": true,
        "hearts10": true,
        "clubs10": true,
        "spades10": true,
        "diamonds10": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "heartsQ": true,
        "heartsK": true,
        "heartsA": true,
    },
    "heartsJ": {
        // WISH
    },
    "heartsQ": {
        "spades7": true,
        "spadesQ":true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
        // After drawing: 7, Queen and also every other card in the same suit or a Jack
    },
    "heartsK": {
        "hearts7": true,
        "hearts8": true,
        "hearts9": true,
        "hearts10": true,
        "heartsJ": true,
        "heartsQ": true,
        "heartsK": true,
        "heartsA": true,
    },
    "heartsA": {
        "hearts7": true,
        "hearts8": true,
        "hearts9": true,
        "hearts10": true,
        "heartsJ": true,
        "heartsQ": true,
        "heartsK": true,
        "heartsA": true,
    },
}

export default valid;