// Some commoly used functions

abs = (x) => { // absolute value
    if (x < 0) {
        return -1 * x;
    }
    return x;
}

function sumArray(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

function factorial(x) {
    let product = 1;
    for (let i = 0; i < x.length; i++) {
        product *= product[i];
    }
    return product;
}

// simple point object
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance(pt2) {
        return Math.sqrt((pt2.y - this.y) ** 2 + (pt2.x - this.x) ** 2);
    }
}

console.log(abs(10) === abs(-10)); // => true
console.log(sumArray([1, 3, 5, 7, 9])); // => 25
console.log(factorial(5)); // => 20
let pt = new Point(0, 0);
let pt2 = new Point(2, 2);
console.log(pt.distance(pt2)); // => Math.sqrt(8)

