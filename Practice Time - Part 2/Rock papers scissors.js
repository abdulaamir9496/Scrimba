let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

// function rockPapersScissors() {
//     console.log(hands[Math.floor(Math.random() * hands.length)]);   //random element from array like: rock, paper, scissor
// }

// rockPapersScissors();

function getHand() {
    let randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex];
}

console.log(getHand());