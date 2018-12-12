function toEqual(actual, expected) {
  if (actual != expected) {
    throw new Error(`Actual value was ${actual}, but ${expected} was expected`);
  }
}

function toBe(actual, expected) {
  if (actual !== expected) {
    throw new Error(
      `Expected actual was expected to be ${expected}, but received ${actual}`
    );
  }
}

const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

let actual, expected;

actual = sum(1, 2);
expected = 3;

actual = sum(2, 1);
expected = 3;
toBe(actual, expected);

actual = subtract(2, 1);
expected = "1";
//toBe(actual, expected)
toEqual(actual, expected);

console.log("Test 2 works!");
