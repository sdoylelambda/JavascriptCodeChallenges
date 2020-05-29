// Little Dictionary
// Create a function that takes in an initial word and filters out an array which contains
// words that start with the same letters as the initial word.
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

function dictionary(initial, words) {
  console.log('initial', initial)
  const outputArr = []
  for (var i = 0; i < words.length; i++) {
    var len = initial.length
    const word = words[i]
    // console.log('word', word)
    const tempArr = []
    for (var y = 0; y < len; y++) {
      const letter = word[y]
      // console.log('letter', letter)
      tempArr.push(letter)
    }
    // console.log('tempArr-', tempArr)
    const wordStart = tempArr.join('') // first x letters of word, where x = initial.length
    // console.log('wordstart::', wordStart)
    if (wordStart === initial) {
      outputArr.push(word)
    }
  }
  console.log('outputArr', outputArr)
  return outputArr
}

// Examples
dictionary('bu', ['button', 'breakfast', 'border']) // ➞ ["button"]

dictionary('tri', ['triplet', 'tries', 'trip', 'piano', 'tree']) // ➞ ["triplet", "tries", trip"]

dictionary('beau', ['pastry', 'delicious', 'name', 'boring']) // ➞ []
