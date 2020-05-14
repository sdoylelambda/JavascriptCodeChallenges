// Flip the Boolean
// Create a function that reverses a boolean value and returns the string
// "boolean expected" if another variable type is given.

function reverse(bool) {
  if (bool === Boolean) {
    const x = bool === true ? false : true
    console.log('x', x)
    return x
  } else {
    console.log('boolean expected')
    return 'boolean expected'
  }
}

// function reverse(bool) {
//   if (bool === true) {
//     console.log('false')
//     return false
//   }
//   if (bool === false) {
//     console.log('true')
//     return true
//   } else {
//     console.log('boolean expected')
//     return 'boolean expected'
//   }
// }

// Examples
reverse(true) // ➞ false

reverse(false) // ➞ true

reverse(0) // ➞ "boolean expected"

reverse(null) // ➞ "boolean expected"
