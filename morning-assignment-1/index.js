// 1
let people = 6;
let seatsInCar = 5;

if (people > seatsInCar) {
    console.log("Not enough seats");
} else {
    console.log("You are all good")
}

// 2 
let climbingSkill = 11;
let dificulty = 15;

if (climbingSkill < dificulty) {
    console.log("You cannot climb this wall")
} else {
    console.log("You can climb this wall")
}

// 3
let cash = 9.50;

let prices = {
    burger: 8,
    fries: 3,
    hotDog: 4,
    iceCream: 4,
    tacos: 10
}

let products = Object.keys(prices);

for (let i = 0; i < products.length; i++) {
    let key = products[i];
    let subtraction = cash - prices[key];

    if (subtraction >= 0) {
        console.log(`You can buy ${key} for ${prices[key]}. Money left: $${subtraction}.`)
    } else {
        console.log(`You can't buy ${key}. You have $${cash} but required ${prices[key]}. `)
    }
}

// 4
let firstName = "Daren";
let expectedName = "Jessie";

if (firstName === expectedName) {
    console.log("It's match!")
}

// 4.5

const expectedNames = ["Jessie", "Jared", "Doug", "Sam", "Frodo"];

if (expectedNames.includes(firstName)) {
    console.log("It's match!");
} else {
    console.log("Unexpected name")
}

// 5
const names = ["John", "James", "Madina", "Sam", "Mike"];
//6
const expected = "Jessie";

for (let i = 0; i < names.length; i++) {
    if (names[i] === expected) {
        console.log("It is match!");
    }
}

// 7

const heights = [34, 46, 62, 51, 28, 36, 35, 37, 45, 50];

for (let i = 0; i < heights.length; i++) {
    let canRide = false;

    if (heights[i] > 40) {
        canRide = true;
        console.log(`${heights[i]} can ride`);
    } else {
        canRide = false;
        console.log(`${heights[i]} cannot ride`);
    }
}

