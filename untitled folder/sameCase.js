// Check if the Same Case
// Create a function that returns true if an input string contains
// only uppercase or only lowercase letters.

function sameCase(str) {
  const upper = str.toUpperCase()
  console.log(upper)
  const lower = str.toLowerCase()
  if (str === upper || str === lower) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

// Examples
sameCase('hello') // ➞ true

sameCase('HELLO') // ➞ true

sameCase('Hello') // ➞ false

sameCase('ketcHUp') // ➞ false
