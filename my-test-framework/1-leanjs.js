const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

let actual, expected;

actual = sum(1, 2);
expected = 3;
if (actual !== expected) {
  throw new Error(`Expected actual was ${expected}, but ${actual} received`);
}

actual = subtract(2, 1);
expected = 1;
if (actual !== expected) {
  throw new Error(`Expected actual was ${expected}, but ${actual} received`);
}

console.log("Test 1 works!");
