// Repeating Letters
// Create a function that takes a string and returns a string in which each character is repeated once.
// All test cases contain valid strings. Don't worry about spaces, special characters or numbers.
// They're all considered valid characters.

function doubleChar(str) {
  var outputStr = ''
  for (var i = 0; i < str.length; i++) {
    const letter = str.charAt(i)
    // return letter duplicated
    outputStr = outputStr.concat(letter, letter)
  }
  console.log('outputStr', outputStr)
  return outputStr
}

// function doubleChar(str) {
//   var arr = []
//   var outputStr = ''
//   // for each letter in str
//   for (var i = 0; i < str.length; i++) {
//     // return letter duplicated
//     const letter = str.charAt(i)
//     arr.push(letter, letter)
//   }
//   const joinedArr = arr.join('')
//   console.log('joinedArr', joinedArr)
//   return joinedArr
// }

// function doubleChar(str) {
//   var arr = []
//   var outputStr = ''
//   // for each letter in str
//   for (var i = 0; i < str.length; i++) {
//     // return letter duplicated
//     const letter = str.charAt(i)
//     console.log('letter', letter)
//     const output = outputStr.concat(letter, letter)
//     console.log('output', output)
//     arr.push(output)
//   }
//   // console.log('outputStr:', outputStr)
//   // return outputStr
//   console.log('arr:', arr)
//   const joinedArr = arr.join('')
//   console.log('joinedArr', joinedArr)
//   return joinedArr
// }

// Examples
doubleChar('String') // ➞ "SSttrriinngg"

doubleChar('Hello World!') // ➞ "HHeelllloo  WWoorrlldd!!"

doubleChar('1234!_ ') // ➞ "11223344!!__  "
