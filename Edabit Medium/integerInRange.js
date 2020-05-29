// Integer in Range?
// Create a function which validates whether a number n is exclusively within the bounds of
// lower and upper.
// Return false if n is not an integer.
// Exclusively means that a number is considered not within the bounds if it is equal to
// the upper bound (see example #2).
// Bounds will be always given as integers.

function intWithinBounds(n, lower, upper) {
  if (Number.isInteger(n) === true) {
    if (n >= lower && n < upper) {
      console.log('true')
      return true
    } else {
      console.log('false')
      return false
    }
  } else {
    console.log('false')
    return false
  }
}

// function intWithinBounds(n, lower, upper) {
//   if (Number.isInteger(n) === true) {
//     if (n > lower && n < upper) {
//       console.log('true')
//       return true
//     } else {
//       console.log('false')
//       return false
//     }
//   } else {
//     console.log('false')
//     return false
//   }
// }

// Examples
intWithinBounds(3, 1, 9) // ➞ true

intWithinBounds(6, 1, 6) // ➞ false

intWithinBounds(4.5, 3, 8) // ➞ false

intWithinBounds(-3, -5, -3) // false

intWithinBounds(6, 1, 6) //, false)
