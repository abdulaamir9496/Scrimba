
//TOPIC: Aside Loops
// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
// for ( let count = 1;  count < 21;  count += 1 )  {
//     // console.log(count)
// }

//How to count 10 t0 20
// for (let number = 10; number < 21; number += 1) {
//     console.log(number);
// }

// for (let i = 0; i < 6; i += 1) {
//     console.log(i)
// }


//TOPIC: write your first for loop
// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

// for(let count = 10; count < 101; count += 10) {
//     console.log(count);
// }


//TOPIC: Aside: for loops and arrays
// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "something else",
//     "Thanks!"
// ]

// console.log(messages);

// DRY - Don't repeat yourself
//This is a bad way of doing things.
// if I add something like: "Great to hear" it will not work. I have to manually add console.log with array of index again.
// console.log(messages[0]);
// console.log(messages[1]);
// console.log(messages[2]);
// console.log(messages[3]);


//Instead of repeating the code we use a loop to iterate through the array.
// for(let i = 0; i < 5; i++){
//     console.log(messages[i]);
// };

//If I add something like: "something else" it will not work. I have to manually add numbers again in the loop.
// for(let i = 0; i < 6; i++){};

//Which is not dynamic completely. So we can use messages.length to make it dynamic.
// for(let i = 0; i < messages.length; i++){
//     console.log(messages[i]);
// };


//TOPIC: write your first array-based for loop
// let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

// for(let i = 0; i < cards.length; i++){
//     console.log(cards[i]);
// }


//TOPIC: for loops, arrays and DOM
// let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

// for(let i = 0; i = sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " ";
// };

