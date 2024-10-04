// Step 1: Declaring Arrays
let myArray = ["Valorant", "League of Legends", "TFT", "Guild Wars 2", "World of Warcraft"];
console.log(myArray);

// Step 2: Accessing Arrays
let gameFirst = myArray[0];

let middleIndex = Math.floor(myArray.length / 2);
let gameMiddle = myArray[middleIndex];

let gameLast = myArray[myArray.length-1];

console.log("First Game:", gameFirst); 
console.log("Middle Game:", gameMiddle);
console.log ("Last Game:", gameLast);

// Step 3: Using Array Properties

let arrayLength = myArray.length;

console.log("The number of games in this array is:", arrayLength);

// Step 4: Array Methods

myArray.push("Call of Duty");

console.log("New Game:", myArray);

let removeGame = myArray.pop();
console.log("Delete Game:", myArray);
console.log("Deleted Game:", removeGame);

let riotGames = myArray.slice(0, 3);
console.log("Riot Games", riotGames);

// Step 5: Iterating Through Arrays

let array = ["Valorant", "League of Legends", "TFT", "Guild Wars 2", "World of Warcraft"];
array.forEach((value, index) => {
console.log(`${index}: ${value}`);
});

// Step 6: Array Destructuring

let [firstGame, secondGame, ...restGames] = myArray;

console.log("First Game:", firstGame);
console.log("Second Game:", secondGame);
console.log("Rest of the Games:", restGames);