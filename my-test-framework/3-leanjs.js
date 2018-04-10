const sum = (a, b) => a + b

const substract = (a, b) => a - b

actual = sum(2,1)
expect(actual).toBe(3)

actual = substract(2,1)
expect(actual).toBe(1)

console.log('Test 3 works!')

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
