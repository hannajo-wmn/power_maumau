const valid = {
    // SPADES
    "spades7": {
        "spades7": true,
        "spades9": true,
        "spades10":true,
        "spadesK":true,
        "spadesA":true,
        "spadesQ":true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
    },
    "spades8": {
        "spades9": true,
        "spades10":true,
        "spadesJ":true,
        "spadesK":true,
        "spadesA":true,
    },
    "spades9": {
        "spades8": true,
        "spades9": true,
        "spades10":true,
        "diamonds8": true,
        "diamonds9": true,
        "clubs8":true,
        "clubs9": true,
        "hearts8": true,
        "hearts9": true,
        "spadesQ": true,
        "spadesK": true,
        "spadesA": true,
    },
    "spades10": {
        "spades8": true,
        "spades9": true,
        "spades10":true,
        "diamonds8":true,
        "diamonds10": true,
        "clubs8": true,
        "clubs10": true,
        "hearts8": true,
        "hearts10": true,
        "spadesK": true,
        "spadesA": true,
    },
    "spadesJ": {
        "spades9": true,
        "spades10":true,
        "spadesK": true,
        "spadesA": true, 
        "diamonds9": true,
        "diamonds10": true,
        "diamondsK": true,
        "diamondsA": true,
        "clubs9": true,
        "clubs10": true,
        "clubsK": true,
        "clubsA": true,
        "hearts9": true,
        "hearts10": true,
        "heartsK": true,
        "heartsA": true,
    },
    "spadesQ": {
        "spades7": true,
        "spades9": true,
        "spades10":true,
        "spadesQ":true,
        "spadesK":true,
        "spadesA": true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
    },
    "spadesK": {
        "spades9": true,
        "spades10": true,
        "spadesJ": true,
        "spadesQ": true,
        "spadesK": true,
        "spadesA": true,
        "diamondsJ": true,
        "heartsJ": true,
        "clubsJ": true,
    },
    "spadesA": {
        "spades9": true,
        "spades10": true,
        "spadesK": true,
        "spadesA": true,
        "diamondsA": true,
        "heartsA": true,
        "clubsA": true,
    },
    // DIAMONDS
    "diamonds7": {
        "spades7": true,
        "spadesQ":true,
        "diamonds7": true,
        "diamonds9": true,
        "diamonds10": true,
        "diamondsK": true,
        "diamondsA": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
    },
    "diamonds8": {
        "diamonds9": true,
        "diamonds10": true,
        "diamondsK": true,
        "diamondsA": true,
    },
    "diamonds9": {
        "diamonds8": true,
        "clubs8": true,
        "hearts8": true,
        "spades8": true,
        "diamonds9": true,
        "diamonds10": true,
        "spades9": true,
        "clubs9": true,
        "hearts9": true,
        "diamondsK": true,
        "diamondsA": true,
    },
    "diamonds10": {
        "diamonds8": true,
        "hearts8": true,
        "clubs8": true,
        "hearts8": true,
        "diamonds9": true,
        "diamondsQ": true,
        "diamondsK": true,
        "diamondsA": true,
        "diamonds10": true,
        "spades10": true,
        "clubs10": true,
        "hearts10": true,
    },
    "diamondsJ": {
        "diamonds9": true,
        "diamonds10": true,
        "diamondsK": true,
        "diamondsA": true,
        "spades9": true,
        "spades10":true,
        "spadesK": true,
        "spadesA": true, 
        "clubs9": true,
        "clubs10": true,
        "clubsK": true,
        "clubsA": true,
        "hearts9": true,
        "hearts10": true,
        "heartsK": true,
        "hearts": true,
    },
    "diamondsQ": {
        "spades7": true,
        "spadesQ":true,
        "diamonds7": true,
        "diamonds9": true,
        "diamonds10": true,
        "diamondsK": true,
        "diamondsA": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
    },
    "diamondsK": {
        "diamonds9": true,
        "diamonds10": true,
        "diamondsK": true,
        "diamondsA": true,
        "diamondsJ": true,
        "heartsJ": true,
        "clubsJ": true,
        "spadesJ": true,

    },
    "diamondsA": {
        "diamonds9": true,
        "diamonds10": true,
        "diamondsK": true,
        "diamondsA": true,
        "spadesA": true,
        "heartsA": true,
        "clubsA": true,

    },
    // CLUBS
    "clubs7": {
        "spades7": true,
        "spadesQ":true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubs9": true,
        "clubs10": true,
        "clubsK": true,
        "clubsA": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
    },
    "clubs8": {
        "clubs9": true,
        "clubs10": true,
        "clubsK": true,
        "clubsA": true,
    },
    "clubs9": {
        "clubs8": true,
        "clubs9": true,
        "diamonds8": true,
        "diamonds9": true,
        "spades8": true,
        "spades9": true,
        "hearts8": true,
        "hearts9": true,
        "clubsK": true,
        "clubsA": true,
    },
    "clubs10": {
        "clubs8": true,
        "clubs9": true,
        "clubs10": true,
        "spades8": true,
        "spades10": true,
        "diamonds8": true,
        "diamonds10": true,
        "hearts8": true,
        "hearts10": true,
        "clubsK": true,
        "clubsA": true,
    },
    "clubsJ": {
        "diamonds9": true,
        "diamonds10": true,
        "diamondsK": true,
        "diamondsA": true,
        "spades9": true,
        "spades10":true,
        "spadesK": true,
        "spadesA": true, 
        "clubs9": true,
        "clubs10": true,
        "clubsK": true,
        "clubsA": true,
        "hearts9": true,
        "hearts10": true,
        "heartsK": true,
        "heartsA": true,
    },
    "clubsQ": {
        "spades7": true,
        "spadesQ":true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubs9": true,
        "clubs10": true,
        "clubsK": true,
        "clubsA": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true,
    },
    "clubsK": {
        "clubs9": true,
        "clubs10": true,
        "clubsJ": true,
        "clubsQ": true,
        "clubsK": true,
        "clubsA": true,
        "heartsJ": true, 
        "diamondsJ": true,
        "spadesJ": true,
    },
    "clubsA": {
        "clubs9": true,
        "clubs10": true,
        "clubsQ": true,
        "clubsK": true,
        "clubsA": true,
        "diamondsA": true,
        "heartsA": true,
        "spadesA": true,
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
        "hearts9": true,
        "hearts10": true,
        "heartsK": true,
        "heartsA": true,
        "heartsQ": true,
    },
    "hearts8": {
        "hearts9": true,
        "hearts10": true,
        "heartsK": true,
        "heartsA": true,
    },
    "hearts9": {
        "hearts8": true,
        "hearts9": true,
        "hearts10": true,
        "clubs8": true,
        "clubs9": true,
        "diamonds8": true,
        "diamonds9": true,
        "spades8": true,
        "spades9": true,
        "heartsK": true,
        "heartsA": true,
    },
    "hearts10": {
        "hearts8": true,
        "hearts9": true,
        "hearts10": true,
        "clubs8": true,
        "clubs10": true,
        "spades8": true,
        "spades10": true,
        "diamonds8": true,
        "diamonds10": true,
        "heartsK": true,
        "heartsA": true,
    },
    "heartsJ": {
        "diamonds9": true,
        "diamonds10": true,
        "diamondsK": true,
        "diamondsA": true,
        "spades9": true,
        "spades10":true,
        "spadesK": true,
        "spadesA": true, 
        "clubs9": true,
        "clubs10": true,
        "clubsK": true,
        "clubsA": true,
        "hearts9": true,
        "hearts10": true,
        "heartsK": true,
        "hearts": true,
    },
    "heartsQ": {
        "spades7": true,
        "spadesQ":true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "hearts9": true,
        "hearts10": true,
        "heartsK": true,
        "heartsA": true,
        "heartsQ": true,
    },
    "heartsK": {
        "hearts8": true,
        "hearts9": true,
        "hearts10": true,
        "heartsJ": true,
        "heartsQ": true,
        "heartsK": true,
        "heartsA": true,
        "clubsJ": true, 
        "diamondsJ": true,
        "spadesJ": true,
    },
    "heartsA": {
        "hearts9": true,
        "hearts10": true,
        "heartsJ": true,
        "heartsQ": true,
        "heartsK": true,
        "heartsA": true,
        "diamondsA": true,
        "spadesA": true,
        "clubsA": true,
    },
}

export default valid;