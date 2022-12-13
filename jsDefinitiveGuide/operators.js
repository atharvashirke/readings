// Some lines that highlight use of operators in JavaScript
console.log("Zoo" < "alphabet"); // => true. All upper case ASCII < lowercase

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

pt = new Point(0, 0);
console.log('x' in pt); // => true.
// "in" checks if right operand has left operand as a property
console.log(pt instanceof Point); // => true
console.log(pt instanceof Object); // => true. instanceof tests for superclass
i = j = k = 0;
console.log([i, j, k]); // => [0, 0, 0].
/* = supports multiple assignment with primitive values. Be careful about *
 * using this with objects (since they are passed by reference).
 */
console.log(eval("pt.x + 1")); // => 1.
/* Eval is a function that was originally intended to be an operator. It
 * evaluates string input like code. It generally should not be used due
 * to the security risk evaluating user input can have. There is no safe
 * way to sanitize user input to safeley be used by eval. I include it
 * just for educative purposes.
 */
// Some confusing code with "direct evaluation"
const globeval = eval; // Using another name does global eval
let x = "global", y = "global";
function foo() {
    let x = "local";
    eval("x += 'changed';");
    return x;
}
/*
 * function bar() {
 *      let y = "local";
 *      globeval("y += 'changed'");
 *      return y;
 * }
*/
console.log(foo(), x); // => "localchanged global"
// console.log(bar(), y); // => "local globalchanged"

function abs(x) {
    return x > 0 ? x: -x; // absolute value with ternary operator (?)
}
console.log(abs(-20));
let wife = undefined, friend = 'Cody'
bestFriend = wife ?? friend; // First-Defined (??) operator
console.log(bestFriend); // => Cody
console.log(typeof friend); // => string

let pt2 = new Point(1, 1);
delete pt2.x;
console.log("x" in pt2); // => false
