//Aside: Returning values in functions

let player1time = 102;
let player2time = 107;

function getFastestRaceTime() {
    if(player1time < player2time) {
        return player1time;
    } else if(player2time < player1time) {
        return player2time;
    } else {
        return player1time;
    }
}

// let fastestRace = getFastestRaceTime();
// console.log(fastestRace);

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function getTotalRaceTime() {
    return player1time + player2time;
}

let totalTime = getTotalRaceTime();
console.log(`Race time for player1time is: ${player1time}`);
console.log(`Race time for player2time is: ${player2time}`);
console.log(`The total race time for player1time and player2time is : ${totalTime}`);

