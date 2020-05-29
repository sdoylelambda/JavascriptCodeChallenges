// Between Words
// Write a function that takes three string arguments (first, last, word) and returns true if
// (when alphabetically sorted) word is found between first and last.
// All letters will be in lowercase.
// All three words will be different.
// Remember the string word is in the middle.

function isBetween(first, last, word) {
  if (first < word && last > word) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

// Examples
isBetween('apple', 'banana', 'azure') // ➞ true

isBetween('monk', 'monument', 'monkey') // ➞ true

isBetween('bookend', 'boolean', 'boost') //➞ false
