// We can assign with let
let x = 0;
// Numeric values are of Number datatype. No distinction for floats and ints
console.log(typeof x);
// Strings
x = "hello world";
// Booleans
x = true;
// Null is a special value "no value"
x = null
// Undefined is a special value. Usually returned if property is accessed that isn't initialized
x = undefined
// Objects are a collection of key/value pairs
let dog = {
    name: "Cody",
    breed: "Labrador Retriever"
};
// Access properties of objects with [] and .
console.log(dog.breed);
console.log(dog["breed"])
// You can make new properties with assignment
dog.weight = 90;
// Conditionally access properties with ?
dog.favorite?.owner?; // => undefined; dog.favorite is undefined
// Arrays
let odds = [1, 3, 5, 7, 9];
console.log(odds.length);
// Shorthand operators
let count = 0;
count++;
count--;
count += 2;
count *= 5;
let x = 2, y = 3; // multiple assignment
x === y // tests equality by value. Must be of same type.
x !== y // tests ineqiality by value. Must be of same type.
"two" > "three" // Returns true, because 'tw' is greater than 'th' alphabetically
// Logical Operators
(x === 2) && (y === 3) // logical and
(x === 2) || (y === 3) // logical or
// functions
function dataDog(dog) {
    console.log(`Your doggie ${dog.name} is such a cute ${dog.breed}!`);
}
dataDog(dog);
let hello = function() {
    console.log("Hello World!");
}
// Arrow functions (usually used for anonymous functiins)
let hello = () => console.log("Hello World!");

