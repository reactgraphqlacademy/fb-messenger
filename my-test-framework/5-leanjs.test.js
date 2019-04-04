const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

function it(message, callback) {
  try {
    console.log(`    ${message}`);
    callback();
    console.log("    ✅  success! 😄");
  } catch (error) {
    console.log(`    💔  oops there was an error: ${error.message}`);
  }
}

function describe(message, callback) {
  console.log(`\n${message}`);
  callback();
}

describe("Testing sum", () => {
  it("sum 2 and 1 should be 3", () => {
    const actual = sum(2, 1);
    expect(actual).toBe(4);
  });
});

describe("Testing subtract", () => {
  it("subtract 2 and 1 should be 1", () => {
    const actual = subtract(2, 1);
    expect(actual).toBe(1);
  });
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
