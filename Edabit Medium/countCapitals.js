// Count the Capital Letters
// Given a string of letters, how many capital letters are there?

function capitalLetters(str) {
  var count = 0
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) count += 1
  }
  console.log('count', count)
  return count
}

// Examples
capitalLetters('fvLzpxmgXSDrobbgMVrc') // ➞ 6

capitalLetters('JMZWCneOTFLWYwBWxyFw') // ➞ 14

capitalLetters('mqeytbbjwqemcdrdsyvq') // ➞ 0
