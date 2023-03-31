// 2 step
for (let i = 0; i < 16; i++) {
    console.log(i);
};

// 3 step

for (let i = 15; i >= 0; i--) {
    console.log(i);
}

// 4 step
let laps = 0;

for (let i = 0; i < 16; i++) {
    laps += 1;
    console.log("That's another lap");
}

console.log("Laps: " + laps);

// 6 step
let age = 36;

for (let i = 0; i < 101; i++) {
    if (age === i) {
        console.log(`Age matched: ${age}`);
    } else {
        console.log(`Age doesn’t match, current i = ${i}, age = ${age}`)
    }
}

// 7 step
for (let i = 0; i < 701; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
}

// 8 step
for (let i = 0; i < 701; i++) {
    if (i % 2 !== 0) {
        console.log(`${i} is odd`);
    }
}

// 9 step

const inventions = {
    "1900": "Zeppelin",
    "1902": "Teddy Bear",
    "1910": "Talking Motion Picture",
    "1918": "Fortune Cookie",
    "1923": "Traffic Signal",
    "1935": "Radar",
    "1938": "Ballpoint Pen",
    "1943": "Slinky"
}

for (let i = 1900; i < 1950; i++) {
    if (inventions[i]) {
        console.log(`It is ${i} - the ${inventions[i]} was invented`)
    }
}
