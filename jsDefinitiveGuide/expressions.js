// Some special expressions in JS
let a = {b: null};
console.log(a.b); // => null
console.log(a.b?.c) // => undefined. Conditional property access (?.).
/*
 * Conditional Property Access ?. prevents type errors being raised when
 * trying to access a property of an object that could be undefined or null.
 * If the left side of the operator evaluates to null or undefined, the
 * expression will return undefined
 */

class Dog {
    constructor(name) {
        this.name = name;
    }
}

cody = new Dog("Cody");
console.log(cody.bark?.()); // => undefined. Conditional invocation expression
/*
 * Conditional Invocation Expression ?.() prevents type errors from being
 * raised when trying to invoke a method or function that may or may not
 * exist. If the function doesn't exist, the invocation won't execute and
 * the program will move to the next line.
 */
haley = null
haley?.bark() // Will not raise type error bc conditional property access
// short-circuits
