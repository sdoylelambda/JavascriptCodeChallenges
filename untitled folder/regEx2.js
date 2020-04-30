// RegEx XIV: Group Ranges x|y
// Groups and ranges indicate groups and ranges of expression characters.
// The regular expression x|y matches either "x" or "y".

// const REGEXP = /(red|blue) flag/g
const REGEXP = /(red flag)|(blue flag)/g

console.log('red flag'.match(REGEXP)) // red
console.log('blue flag'.match(REGEXP)) // blue

// Matches "blue" in "blue flag" and "red" in "red flag".
// Create a regular expression to match all red flag and blue flag in a string.
// You must use | in your expression. Flags can come in any order.

// Examples
console.log('red flag blue flag'.match(REGEXP)) // ➞ ["red flag", "blue flag"]

console.log('yellow flag red flag blue flag green flag'.match(REGEXP)) // ➞ ["red flag", "blue flag"]

console.log(
  'pink flag red flag black flag blue flag green flag red flag '.match(REGEXP)
) // ➞ ["red flag", "blue flag", "red flag"]
