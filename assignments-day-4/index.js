// 1
const logMyName = () => {
    console.log('Vitalii is my name')
}

// 2
const logThisName = (name) => {
    console.log(`${name} is your name`)
}

// 3
const checkName = (name) => {
    if (name === 'Joyce') {
        console.log('Provided name is Joyce')
    } else {
        console.log('Provided name is not Joyce')
    }
}

// 4 
const doWhileLoop = () => {
    let i = 0;
    let limit = 10;

    while (i <= limit) {
        console.log(i)
        i++;
    }
}

// 5
const doWhileLoopThisNumber = (limit = 10) => {
    let i = 0;

    while (i <= limit) {
        console.log(i)
        i++
    }
}

// 6
const getSumOfNumbers = (a, b) => {
    console.log(a + b);
}

// 7
const checkIsEven = (num) => {
    if (num % 2 === 0) {
        console.log(`${num} is even`)
    } else {
        console.log(`${num} is odd`)
    }
}

// 8
const checkIfNameIsTooShort = (name) => {
    if (name.length <= 4) {
        console.log(`The name ${name.join('')} is too small`)
    } else {
        console.log(`The name ${name.join('')} is not small`)
    }
}

// 9
const logEveryNameInArray = (names) => {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

// 10
const getTypeOfData = (data) => {
    console.log(`Parameter ${data} has a type of ${typeof data}`)
}

// 11
const getMultipliesOfTen = () => {
    for (let i = 0; i <= 100; i++) {
        i % 10 === 0 ? console.log(i) : null
    }
}


// Function calls

logMyName();
logThisName("Mike");
checkName("Joyce");
doWhileLoop();
doWhileLoopThisNumber(25);
getSumOfNumbers(10, 2);
checkIsEven(7);
checkIfNameIsTooShort(['s', 'a', 'm']);
logEveryNameInArray(['Sam', 'John', 'Mike', 'Emily', 'Den', 'Madina']);
getTypeOfData(17);
getMultipliesOfTen();



