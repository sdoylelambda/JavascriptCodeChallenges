// Return the Four Letter Strings
// Create a function that takes an array of strings and returns the words that are
// exactly four letters.

function isFourLetters(arr) {
  const outArr = []
  // split off each item
  arr.forEach((word) => {
    console.log('word', word.length)
    // check if 4 chars long
    if (word.length === 4) {
      // if so add to outArr
      outArr.push(word)
      console.log('outArr:', outArr)
    }
  })
  console.log('newArr', outArr)
  return outArr
}

// Examples
isFourLetters(['Tomato', 'Potato', 'Pair']) // ➞ ["Pair"]

isFourLetters(['Kangaroo', 'Bear', 'Fox']) // ➞ ["Bear"]

isFourLetters(['Ryan', 'Kieran', 'Jason', 'Matt']) // ➞ ["Ryan", "Matt"]
