//TOPICS covered: 
// arrays
// objects
// booleans
// if else statements
// comparison operators
// logical operators
// for loops
// the Math objects
// return statements

// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

// let firstCard = 8;
// let secondCard = 11;

// let sum = firstCard + secondCard;
// console.log(sum);

//TOPIC: Aside Math.random();
// let randomNumber = Math.random();
// console.log(randomNumber);

/* 

What does Math.random() do?

Your answer: it generates a random number between 0 and 1 (not inclusive of 1)

*/

//TOPIC: Aside Math.random() * 6;

// let randomNumber = Math.random() * 6;
// console.log(randomNumber);

/* 

In which range will our randomNumber be now?

From: 0
To: 5.999999999999999

*/

//TOPIC: Aside Math.floor(); Flooring the number with Math.floor()
// let randomNumber = Math.random() * 6

// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber)


/* 

What does Math.floor() do to positive numbers?

Your answer: it removes the decimals

*/

//TOPIC: using Math.random() and Math.floor() to create a dice
// let randomNumber = Math.floor(Math.random() * 6);
// console.log(randomNumber);

/* 
Write down all the possible values randomNumber can hold now!

0,1,2,3,4,5
*/

//TOPIC: Try to modify the expression so that we get a range from 1 to 6
// let randomNumber = Math.floor( Math.random() * 6 ) + 1;

// console.log(randomNumber)


//TOPIC: Create a function, rollDice(), that returns a random number between 1 and 6
// function rollDice() {
//     // let randomNumber = Math.floor(Math.random() * 6) + 1;
//     // return randomNumber;
//     return randomNumber = Math.floor(Math.random() * 6) + 1;
// }

// console.log(rollDice());


//TOPIC: Aside: The AND operator (&&)
// let hasCompletedCourse = true
// let givesCertificate = true

//1st way of writing the code:
// if(hasCompletedCourse === true) {
//     if(givesCertificate === true) {
//         generateCertificate();
//     }
// }

//2nd way of writing the code:
// if(hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate();
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }


//TOPIC: Write your first logical operator
// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if(hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution();
// }

// function showSolution() {
//     console.log("Showing the solution....");
// }

//TOPIC: Aside The OR operator (||)
// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

// let likesDocumentaries = true;
// let likesStartups = true;

// if( likesDocumentaries === true || likesStartups === true) {
//     recommendMovie();
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }


//TOPIC: Aside Intro to objects
// Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course);
// console.log(course.tags);  //dot notation
// console.log(course["tags"]);  //bracket notation

//TOPIC: Create your first object
// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

// let airbnbCastleList = {
//     title: "Castle in the sky",
//     location: "Sky",
//     rooms: 10,
//     isAvailable: true,
//     amenities: ["pool", "gym", "sauna"]
// }

// console.log(airbnbCastleList.title);
// console.log(airbnbCastleList.amenities);

