// Some notes related to objects in JavaScript 
// Any value that is not a string, number, Symbol, boolean, null, or undefined is an object.
// Objects are mutable and are manipulated by reference, not value. 

class Dog {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
};

/* In addition to name and value, properties have three attributes:
 * writable - specifies whether value of property can be set
 * enumerable - specifies whether property name is returned by a for/in loop
 * configurable - specifies whether property can be deleted or value can be altered
 * By default, properties are writable, enumerable, and configurable.
*/

cody = new Dog('Cody');

// We can also create new objects with Object.create(), with the argument being a prototype
// of the object 

cat = Object.create(cody); // We'll use a Dog object as a prototype to inherit methods
cat.name = "Blondie";

cat.printName(); // => Blondie

// Query property values with . operator or []
console.log(cat.name); // => Blondie
console.log(cat["name"]); // => Blondie

// You can also use these to create and set properties
cat.name = "Garfield";
cat["weight"] = 80;

console.log(cat.name);
console.log(cat.weight);

// You should use [] when you need to create/access properties that you are generating at runtime
let student = {
    name: "Atharva",
    institution: "UC Berkeley", 
    class1: "Data 100",
    class2: "CS 186",
    class3: "CS 188",
};

schedule = [];

for (let i of [1, 2, 3]) {
    schedule.push(student[`class${i}`]);
};

console.log(schedule); // => ["Data 100", "CS 186", "CS 188"]

// You can use delete tro delete properties 
delete student.class1 
delete student["class2"] 






