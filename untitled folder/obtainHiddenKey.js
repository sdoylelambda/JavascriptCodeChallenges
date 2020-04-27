// Does the Object Contain a Given Key?
// Write a function that returns true if a hash contains the specified key, and false otherwise.

function hasKey(obj, key) {
  console.log(obj.hasOwnProperty(key))
  return obj.hasOwnProperty(key)
}

// Examples
hasKey({ a: 44, b: 45, c: 46 }, 'd') //➞ false

hasKey({ craves: true, midnight: true, snack: true }, 'morning') //➞ false

hasKey({ pot: 1, tot: 2, not: 3 }, 'not') //➞ true

// const object1 = new Object()
// object1.property1 = 42

// console.log(object1.hasOwnProperty('property1'))
// // expected output: true

// console.log(object1.hasOwnProperty('toString'))
// expected output: false
