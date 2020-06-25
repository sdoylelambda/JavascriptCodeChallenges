// Create a function that takes a string and replaces the vowels with another character.

// a = 1
// e = 2
// i = 3
// o = 4
// u = 5

function replaceVowel(word) {
  var outputString = ''
  for (var i = 0; i < word.length; i++) {
    const char = word.charAt(i)
    if (char === 'a') {
      outputString = outputString.concat('1')
    } else if (char === 'e') {
      outputString = outputString.concat('2')
    } else if (char === 'i') {
      outputString = outputString.concat('3')
    } else if (char === 'o') {
      outputString = outputString.concat('4')
    } else if (char === 'u') {
      outputString = outputString.concat('5')
    } else {
      outputString = outputString.concat(char)
    }
  }
  console.log('output:', outputString)
  return outputString
}

// function replaceVowel(word) {
//   var outputString = ''
//   // check each char to see if it s a vowel
//   for (var i = 0; i < word.length; i++) {
//     const char = word.charAt(i)
//     if (char === 'a') {
//       console.log('word.charAt(i)', word.charAt(i))
//       outputString = outputString.concat('1')
//     } else if (char === 'e') {
//       console.log('word.charAt(i)', word.charAt(i))
//       outputString = outputString.concat('2')
//     } else if (char === 'i') {
//       console.log('word.charAt(i)', word.charAt(i))
//       outputString = outputString.concat('3')
//     } else if (char === 'o') {
//       console.log('word.charAt(i)', word.charAt(i))
//       outputString = outputString.concat('4')
//     } else if (char === 'u') {
//       console.log('word.charAt(i)', word.charAt(i))
//       outputString = outputString.concat('5')
//     } else {
//       console.log('else', word.charAt(i))
//       outputString = outputString.concat(char)
//     }
//   }

//   console.log('output:', outputString)
//   return outputString
// }

// Examples
replaceVowel('karachi') // ➞ "k1r1ch3"

replaceVowel('chembur') // ➞ "ch2mb5r"

replaceVowel('khandbari') // ➞ "kh1ndb1ri"

replaceVowel('aeiouq') // 12345q
