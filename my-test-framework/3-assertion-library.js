const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

let actual, expected;

// Task: test this using the toEqual function below
actual = sum(2, 1);

// Task: test this using the toBe function below
actual = subtract(2, 1);

function expect(actual) {
  function toEqual(expected) {
    if (actual != expected) {
      throw new Error(
        `Actual value was ${actual}, but ${expected} was expected`
      );
    }
  }

  function toBe(expected) {
    if (actual !== expected) {
      throw new Error(
        `Actual value was ${actual}, but ${expected} was expected`
      );
    }
  }

  return {
    toEqual,
    toBe
  };
}

console.log("Test 1 works!");
