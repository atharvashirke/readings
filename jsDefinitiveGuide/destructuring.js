// Some lines of JS to practice destructuring
let [x, y] = [0, 1]; // x = 0, y = 1
[x, y] = [x + 1, y + 1]; // x = 1, y = 2
let [a, ...b] = [1, 2, 3, 4]; // a = 1, b = [2, 3, 4]
[,,x,,y] = [1, 2, 3, 4, 5, 6]; // x = 3, y = 6
let [z, [w, i]] = [1, [2, 3]] // z = 1, w = 2, i = 3
let [first, ...rest] = "Hello" // first = 'H', rest = ['e', 'l', 'l', 'o']
