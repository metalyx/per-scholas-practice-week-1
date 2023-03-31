// 1
const logTwoNumbers = (a, b) => {
    console.log(a + b);
}

logTwoNumbers(6, 6);
logTwoNumbers(2, 6);
logTwoNumbers(5, 1);

// 2
const logCurrentMood = () => {
    console.log("Feeling good!")
}

logCurrentMood();
logCurrentMood();

// 3 
const logSleepDeficit = (numberOfHoursYouSlept) => {
    8 - numberOfHoursYouSlept > 0
    ? console.log(`Your sleep deficit is ${8 - numberOfHoursYouSlept}`)
    : console.log(`You don't have sleep deficit!`);
};

logSleepDeficit(5);
logSleepDeficit(6);
logSleepDeficit(3);
logSleepDeficit(8);
logSleepDeficit(10);

// 4
const loopTenTimes = () => {
    for (let i = 0; i < 10; i++) {
        console.log(`for loop ${i}`);
    }
}

// 5
const loopTwentyTimes = () => {
    let counter = 1;
    while (counter <= 20) {
        console.log(`for loop ${i}`);
        counter++;
    }
}

// 6
const getPointTotal = (array) => {
    return array.reduce((p, cur) => cur + p, 0);
}

console.log(getPointTotal([10, 5, 5, 5, 5]));

// 7
const filterLowPoints = (array) => {
    return array.filter((item) => item < 10);
}

console.log(filterLowPoints([10, 5, 14, 6]));

// 8
const getShipsAndLog = async () => {
    const data = await fetch('https://swapi.dev/api/starships').then((res) => res.json());

    const starShips = data.results;
    
    starShips.forEach(starShip => {
        console.log(starShip.name)
    });
}

getShipsAndLog();


console.log(`here is your number: ${480 - 100}, and that ${100 + 242342}`)


const array = [12, 24, 5, 36];
let sum = 0;

