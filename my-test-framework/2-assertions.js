/*
Assertions are functions that help us assert the test is correct
Tasks:

1. Implement the toEqual and toBe assetion functions
2. Use your assertion functions to assert sum(2,1) and subtract(2,1) work as expected
*/

function toEqual(actual, expected) {}

function toBe(actual, expected) {}

const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

let actual, expected;

actual = sum(1, 2);
expected = 3;
if (actual !== expected) {
  throw new Error(`Actual value was ${actual}, but ${expected} was expected`);
}

actual = subtract(2, 1);
expected = "1";
if (actual != expected) {
  throw new Error(`Actual value was ${actual}, but ${expected} was expected`);
}

console.log("Test 1 works!");
