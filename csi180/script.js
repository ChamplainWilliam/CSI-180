let myDeck = []
let enemyDeck = []

//108 is the number of cards in an uno deck with all the +2s and +4s etc
//there are 4 0s, one from each color and 8 1-9s, 2 from each color (76)
//2 draw 2s from each color, 2 skips from each color, 2 reverse from each color (24)
//4 wild cards and 4 draw 4s (8)
let deckSize = [108];


class Card {
    //constructor
    constructor(color, value)
    {
        this.color = color;
        this.value = value;
    }
}

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

    

}
let test = new Card("green", '1')
console.log(test.color + test.value + ".png")

function addCard(){
    document.getElementById("myDeck").innerHTML = 
    //`<img src="green1.png">`
    `<img src="${test.color}${test.value}.png">`
}
