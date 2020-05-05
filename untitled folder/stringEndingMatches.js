// Check if String Ending Matches Second String
// Create a function that takes two strings and returns
// true if the first string ends with the second string;
// otherwise return false.
// Notes
// All test cases are valid one word strings.

function checkEnding(str1, str2) {
  const x = str1.endsWith(str2)
  // console.log('x', x)
  if (str1.endsWith(str2)) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

// Examples
checkEnding('abc', 'bc') // ➞ true

checkEnding('abc', 'd') // ➞ false

checkEnding('samurai', 'zi') // ➞ false

checkEnding('feminine', 'nine') // ➞ true

checkEnding('convention', 'tio') // ➞ false
