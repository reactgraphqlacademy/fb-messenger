const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

function test(message, callback) {
  /* Task:
    - console.log the message
    - Execute the callback
    - Catch the error if the callback throws an error and display the error message
    - Bonus, add emojis 😋
  */
}

test("sum 2 and 1 should be 3", () => {
  const actual = sum(2, 1);
  expect(actual).toBe(4);
});

test("subtract 2 and 1 should be 1", () => {
  const actual = subtract(2, 1);
  expect(actual).toBe(1);
});

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
