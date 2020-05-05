// Repeat the Same Item Multiple Times
// Create a function that takes two arguments (item, times).
// The first argument (item) is the item that needs repeating while the
// second argument (times) is the number of times the item is to be repeated.
// Return the result in an array.
// Notes
// item can be either a string or a number.
// times will always be a number.

function repeat(item, times) {
  const outArr = []
  var time = times
  while (time > 0) {
    outArr.push(item)
    time -= 1
  }
  console.log('output', outArr)
  return outArr
}

// Examples
repeat('edabit', 3) // ➞ ["edabit", "edabit", "edabit"]

repeat(13, 5) // ➞ [13, 13, 13, 13, 13]

repeat('7', 2) // ➞ ["7", "7"]

repeat(0, 0) // ➞ []
