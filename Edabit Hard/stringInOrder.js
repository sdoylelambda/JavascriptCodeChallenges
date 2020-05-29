// Is the String in Order?
// Create a function that takes a string and returns true or false, depending on whether the
// characters are in order or not.

function isInOrder(str) {
  var orderedStr = str.split('').sort().join('')
  // console.log('orderedStr', orderedStr)
  if (str === orderedStr) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

// Examples
isInOrder('abc') // ➞ true

isInOrder('edabit') // ➞ false

isInOrder('123') // ➞ true

isInOrder('xyzz') // ➞ true
