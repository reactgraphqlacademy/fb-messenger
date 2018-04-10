const sum = (a, b) => a + b

const substract = (a, b) => a - b

let result, expected

result = sum(1,2)
expected = 3
if (result !== expected) {
  throw new Error(`Expected result was ${expected}, but ${result} received`)
}

result = substract(2,1)
expected = 1
if (result !== expected) {
  throw new Error(`Expected result was ${expected}, but ${result} received`)
}

console.log('Test 1 works!')
