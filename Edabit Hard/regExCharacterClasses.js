// RegEx: Character Classes VIII ⁠- \d
// You can think of character classes as characters with special meaning.
// They are recognized as special when you place the \ before the character.

// Here are a list of the characters classes in JavaScript:

// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]

// Extract the addresses from this string:

const str = '123 Redding Dr. 1560 Knoxville Ave. 3030 Norwalk Dr. 5 South St.'
// const REGEXP = /\d+.+?\./g
const REGEXP = /\d+\s\w+\s\w+\./g
// const REGEXP = /\d+ \w+ \w+\./g
console.log(str.match(REGEXP))

// ["123 Redding Dr.", "1560 Knoxville Ave", "3030 Norwalk Dr.", "5 South St."]
// Write the regular expression that matches all street addresses.
// All street addresses begin with a number.

// Use the character class \d in your expression.

// String regex = "^\\s+[A-Za-z,;'\"\\s]+[.?!]$"
// ^ means "begins with"
// \\s means white space
// + means 1 or more
// [A-Za-z,;'"\\s] means any letter, ,, ;, ', ", or whitespace character
// $ means "ends with"
