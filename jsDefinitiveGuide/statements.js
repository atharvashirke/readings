// Some notes about statements
n = 5;
let answer = null;
switch (n) {
    case 1:
        answer = "one";
        break;
    case 2:
        answer = "two";
        break;
    case 3:
        answer = "three";
        break;
    default:
        answer = "greater than three";
        break;
}
console.log(`N is ${answer}.`); // => N is greater than three.
// do-while loop ensures while loop executes at least once
let i = 0
do {
    console.log("Still prints despite i === 0");
} while (i !== 0);
// We can do pythonic iteration over iterable with for/of statement
let array = [1, 2, 3, 4, 5];
for (let element of array) {
    console.log(element);
}
let dog = {
    breed: "Labrador Retriever",
    weight: 90,
    name: "Cody"
}
// We can iterate over object properties with for/in or Object.keys()
for (let property in dog) {
    console.log(property);
}
for (let property of Object.keys(dog)) {
    console.log(property);
}
// If you want values, use Object.values()
for (let value of Object.values(dog)) {
    console.log(value);
}
// If you want both keys and values, use Object.entries
for (let [key, value] of Object.entries(dog)) {
    console.log(`This dog's ${key} is ${value}.`);
}

function factorial(x) {
    if (x < 0) {
        throw new Error("x must not be negative"); // throw for errors
    }
    let product = 1;
    for (let i = 1; i < x + 1; i++) {
        product *= i;
    }
    return product
}

try {
    factorial(-5);
}
catch(error) {
    console.log(error);
}
finally {
    console.log("This is what try/catch/finally does.");
}

