// Re-Form the Word
// A word has been split into a left part and a right part.
// Re-form the word by adding both halves together,
// changing the first character to an uppercase letter.

function getWord(left, right) {
  // combine left, right
  var joinedWord = left.concat(right)
  console.log('joinedWord', joinedWord)
  // make first letter uppercase
  var combined = joinedWord.charAt(0).toUpperCase() + joinedWord.slice(1)
  // var restLetters = joinedWord.slice(1)
  // console.log('restLetters', restLetters)

  console.log('combined:', combined)
  return combined
}

// Examples
getWord('seas', 'onal') // ➞ "Seasonal"

getWord('comp', 'lete') // ➞ "Complete"

getWord('lang', 'uage') // ➞ "Language"
