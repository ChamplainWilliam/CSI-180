let myDeck = [];
let enemyDeck = [];
let numberOfCards = 108
//108 is the number of cards in an uno deck with all the +2s and +4s etc
//there are 4 0s, one from each color and 8 1-9s, 2 from each color (76)
//2 draw 2s from each color, 2 skips from each color, 2 reverse from each color (24)
//4 wild cards and 4 draw 4s (8)
let deckSize = [108];

deckSize = [
            //the 25 red cards
            "red0", "red1", "red1", "red2", "red2", "red3", "red3", "red4", "red4", "red5", "red5", "red6", "red6", 
            "red7", "red7", "red8", "red8","red9", "red9", "red10", "red10", "red11", "red11,", "red12", "red12",
            //the 25 blue cards
            "blue0", "blue1", "blue1", "blue2", "blue2", "blue3", "blue3", "blue4", "blue4", "blue5", "blue5", "blue6",
            "blue6", "blue7", "blue7", "blue8", "blue8", "blue9", "blue9", "blue10", "blue10", "blue11", "blue11", "blue12", "blue12",
            //the 25 yellow cards
            "yellow0", "yellow1", "yellow1", "yellow2", "yellow2", "yellow3", "yellow3", "yellow4", "yellow4",
            "yellow5", "yellow5", "yellow6", "yellow6", "yellow7", "yellow7", "yellow8", "yellow8", 
            "yellow9", "yellow9", "yellow10", "yellow10", "yellow11", "yellow11", "yellow12", "yellow12",
            //the 25 green cards
            "green0", "green1", "green1", "green2", "green2", "green3", "green3", "green4", "green4",
            "green5", "green5", "green6", "green6", "green7", "green7", "green8", "green8",
            "green9", "green9", "green10", "green10", "green11", "green11", "green12", "green12",
            //the 8 wild cards, half are +4
            "wild0", "wild1", "wild2", "wild3", "wild4", "wild5", "wild6", "wild7"
             ]


class Card {
    //constructor
    constructor(color, value)
    {
        this.color = color;
        this.value = value;
    }
}


function loadCards() {
    //picks a random number from 0-107, will be used as index for deckSize array
    let randomCard = Math.floor(Math.random() * numberOfCards);
    

}
/*
function randomCard() {
    //returns a random number from 0-14
    //values 10, 11, 12, 13, 14 will be +2, skip, reverse, +4, and wild.
    let aCard = new Card;
    aCard.value = Math.floor(Math.random() * 15);

    //values 0-3 for red, green, yellow, or blue
    
    let colorNumber = Math.floor(Math.random() * 4);
    if (colorNumber === 0)
    {aCard.color = "red" };
    if (colorNumber === 1)
    {aCard.color = "green"};
    if (colorNumber === 2)
    {aCard.color = "yellow"};
    if (colorNumber === 3)
    {aCard.color = "blue"};

    console.log(aCard.color, aCard.value);

}*/
let test = new Card("blue", '1')
console.log(test.color + test.value + ".png")

function addCard(){
    document.getElementById("myDeck").innerHTML = 
    //`<img src="green1.png">`
    `<img src="cards/${test.color}${test.value}.png">`
}

function randomCard(){
    let randomNum = Math.floor(Math.random() * numberOfCards);
    let randCard = deckSize[randomNum];
    console.log(randCard);
    document.getElementById("playField").innerHTML =
    `<img src="cards/${randCard}.png">`
    
}