// Check if String Ending Matches Second String
// Create a function that takes two strings and returns true if the first string ends with the second string;
// otherwise return false.

function checkEnding(str1, str2) {
  // const ending = 
  // if str1 last values === str2
  if (str1.endsWith(str2)) {
  return true
} else {
  return false
}

// Examples

// checkEnding("abc", "bc") //➞ true

checkEnding("abc", "d") //➞ false

// checkEnding("samurai", "zi") //➞ false

// checkEnding("feminine", "nine") //➞ true

// checkEnding("convention", "tio") //➞ false

// const str1 = 'Cats are the best!'

// console.log(str1.endsWith('best', 17))
// // expected output: true

// const str2 = 'Is this a question'

// console.log(str2.endsWith('?'))
// expected output: false
