// let firstCard = 6
// let secondCard = 11
// let sum = firstCard + secondCard

// if(sum < 21) {
//     console.log("Do you want to draw a new card? Type 'ok' to draw a new card. 😊");
// } else if(sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳");
// } else {
//     console.log("You're out of the game! 😭");
// }

//Your 1st if..else statement

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 22;

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

// if(age < 21) {
//     console.log("You can not enter the club!");
// } else {
//     console.log("Welcome!");
// }

//Your 2nd if..else statement

// Check if the person is elegible for a birthday card from the King! (100)

// let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

// if(age < 100) {
//     console.log("Not elegible");
// } else if(age === 100) {
//     console.log("Here is your birthday card from the King!");
// } else {
//     console.log("Not elegible, you have already gotten one");
// }


//Your 3rd if..else statement
// let firstCard = 10
// let secondCard = 7
// let sum = firstCard + secondCard + 4;

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

// if(sum <= 20) {
//     console.log("Do you want to draw a new card? 🙂");
// } 
// else if(sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳");
// }
// else {
//     console.log("You're out of the game! 😭");
// }

//Your 4th if...else if else statement: Add the hasBlackJack variable

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// let hasBlackJack = false

// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
//     hasBlackJack = true
// } else {
//     console.log("You're out of the game! 😭")
// }

// // CASH OUT!
// console.log(hasBlackJack)


//Your 5th if...else if else statement: Add the isAlive variable
// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard;
// // let sum = firstCard + secondCard + 4;
// let hasBlackJack = false
// // 1. Create a variable called isAlive and assign it to true
// let isAlive = true;
// // 2. Flip its value to false in the appropriate code block 
// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
//     hasBlackJack = true;
// } else {
//     console.log("You're out of the game! 😭")
//     isAlive = false;
// }

// // 3. Log it out to check that you're doing it right
// console.log(isAlive);


//Let's practice boolean conditions

// console.log(4 === 3)  //false 
// console.log(5 > 2)    //true
// console.log(12 > 12)  //false
// console.log(3 < 0)    //false
// console.log(3 >= 3)   //true
// console.log(11 <= 11) //true
// console.log(3 <= 2)   //false

//Your 6th: Add the message variable

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard + 4
// let hasBlackJack = false
// let isAlive = true
// // 1. Declare a variable called message and assign its value to an empty string
// let message = "";
// // 2. Reassign the message variable to the string we're logging out
// if (sum <= 20) {
//     message = "Do you want to draw a new card? 🙂";
// } else if (sum === 21) {
//     message = "Wohoo! You've got Blackjack! 🥳";
//     hasBlackJack = true
// } else {
//     message = "You're out of the game! 😭";
//     isAlive = false
// }

// // 3. Log it out!
// console.log(message);

//Link to stylesheet

let firstCard = 10
let secondCard = 4
// 1. Create a new array - cards - that contains firstCard and secondCard
let cards = [firstCard, secondCard];  //array of cards - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el");
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");   //Another way of selecting the element using querySelector. It selects the first element that matches the selector. It can be used to select elements by class, id, tag name, etc. It can also be used to select multiple elements by class, id, tag name and other selectors.

// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el");

// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame();
}

function renderGame() {
    // 2. Refer to the cards array when rendering out the cards
    //render out firstCard and secondCad
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    cardsEl.textContent  = "Cards: " + cards[0] + " " + cards[1];
    //render out ALL the cards we have
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } 
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } 
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message;
}


// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    // console.log("Drawing a new card from the deck!");
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 8;
    // 2. Add the new card to the sum variable
    sum += card;

    // Push the card to the cards array
    cards.push(card);
    console.log(cards);
    // 3. Call startGame()
    renderGame();
}