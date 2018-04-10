const sum = (a, b) => a + b

const substract = (a, b) => a - b

let result, expected

// Task: test this using the toEqual function below
result = sum(2,1)

// Task: test this using the toBe function below
result = substract(2,1)

function expect(actual) {
  function toEqual(expected) {
    if (actual != expected) {
      throw new Error(`Actual value was ${actual}, but ${expected} was expected`)
    }
  }

  function toBe(expected) {
    if (actual !== expected) {
      throw new Error(`Actual value was ${actual}, but ${expected} was expected`)
    }
  }

  return {
    toEqual,
    toBe,
  }
}
