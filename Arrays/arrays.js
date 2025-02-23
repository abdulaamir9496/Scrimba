// Arrays - ordered lists of items

//0 indexed
// let featuredPosts = [
//     "checkout my Netflix clone",         //0
//     "here's the code for my project",    //1
//     "I've just relaunched my portfolio"  //2
// ]

// console.log(featuredPosts[2]);
// console.log(featuredPosts.length);

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings
// let experience = [
//     "Software Developer",
//     "Frontend Developer",
//     "Backend Developer",
//     "Fullstack Developer",
//     "AI Developer",
//     "Machine Learning Developer",
// ]

// console.log(experience[1]);
// console.log(experience[2]);
// console.log(experience[0]);
// console.log(experience[3]);

//TOPIC: Arrays with multiple data types
// Array - ordered list of items - composite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

// let aboutMyself = [
//     name = "Aamir",
//     age = 28,
//     likePizza = "I like pizza: " + true
// ];

// console.log(aboutMyself[0]);
// console.log(aboutMyself[1]);
// console.log(aboutMyself[2]);

// console.log(aboutMyself);


//TOPIC: Array.push(), and .pop()
// let cards = [7, 3];

// console.log(cards);
// cards.push(5);
// console.log(cards);

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage);
console.log(messages);

// How can you remove the last item in an array? Try to google it!
messages.pop();
console.log(messages);
