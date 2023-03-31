let numberOfStudents = 17;

if (numberOfStudents > 20) {
    console.log("classroom too small");
} else {
    console.log("classroom size acceptable");
}

let numberOfHouses = 5;

if (numberOfHouses > 2) {
    console.log("you need to sell more houses");
} else {
    console.log("seems reasonable");
}

let bill = 20;

if (bill > 15) {
    console.log("we should split the bill");
} else {
    console.log("I’ll get the bill this time");
}

let grade = 66;

if (grade <= 55) {
    console.log("Not too good");
} else if (grade <= 60) {
    console.log("ehhhh");
} else if (grade <= 70) {
    console.log("Keep trying");
} else if (grade <= 80) {
    console.log("nice!");
} else if (grade <= 90) {
    console.log("Doing good!");
} else {
    console.log("over 90! great!");
}

// Example 1: length of userName

let userName = "RandomName";

if (userName.length <= 3) {
    console.log("Too short userName provided...");
} else {
    console.log("Username looks good!")
}

// Example 2: Do I have bananas?

let fruits = ["apple", "banana", "banana", "orange", "banana"];

let numberOfBananas = 0;

fruits.forEach((fruit) => {
    if (fruit === "banana") {
        numberOfBananas += 1;
    }
});

if (numberOfBananas > 1) {
    console.log(`You have ${numberOfBananas} bananas in you pockets!`)
} else if (numberOfBananas === 1) {
    console.log(`You have a banana in your pocket!`)
} else {
    console.log("You don't have bananas in your pockets.");
}

// Example 3: Am I logged in?

let isLoggedIn = false;

if (isLoggedIn) {
    console.log('You are logged in.');
} else {
    console.log('Sorry, you need to log in')
}
