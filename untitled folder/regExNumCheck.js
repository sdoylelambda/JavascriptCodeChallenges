// Regex Series: String Contains at Least One Digit
// Write a regular expression that matches a string if it contains at least one digit.

let x = /\d/
console.log('x', x)

// Examples
;('c8') // ➞ true
;('23cc4') // ➞ true
;('abwekz') // ➞ false
;('sdfkxi') // ➞ false
