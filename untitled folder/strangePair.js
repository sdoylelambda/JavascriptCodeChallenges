// Strange Pair
// A pair of strings form a strange pair if both of the following are true:

// The 1st string's first letter = 2nd string's last letter.
// The 1st string's last letter = 2nd string's first letter.

// Create a function that returns true if a pair of strings constitutes a strange pair,
// and false otherwise.

function isStrangePair(str1, str2) {
  const firstString1stLetter = str1.charAt(0)
  // console.log('firstString1stLetter', firstString1stLetter)
  const secondStringLastLetter = str2.charAt(str2.length - 1)
  // console.log('secondStringLastLetter', secondStringLastLetter)
  const firstStringLastLetter = str1.charAt(str1.length - 1)
  // console.log('firstStringLastLetter', firstStringLastLetter)
  const secondString1stLetter = str2.charAt(0)
  // console.log('secondString1stLetter', secondString1stLetter)
  if (
    firstString1stLetter === secondStringLastLetter &&
    firstStringLastLetter === secondString1stLetter
  ) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

// Examples
isStrangePair('ratio', 'orator') // /➞ true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".

isStrangePair('sparkling', 'groups') // ➞ true

isStrangePair('bush', 'hubris') // ➞ false

isStrangePair('', '') // ➞ true
