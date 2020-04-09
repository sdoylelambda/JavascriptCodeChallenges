// function isJS(path) {
//   const lastWord = /\w+$/
//   console.log('lastWord', lastWord)
//   console.log(path.match(lastWord))
// }

// console.log(isJS('/users/user.jsx')) //➞ true

// console.log(isJS('/users/user.js')) //➞ true

// console.log(isJS('/users/user.ts')) //➞ false

const text = 'A quick fox'

const regexpLastWord = /\w+$/
console.log(text.match(regexpLastWord))
// expected output: Array ["fox"]

// /\bm/ matches the "m" in "moon".
// /oo\b/ does not match the "oo" in "moon", because "oo" is followed by "n"
// which is a word character.
// /oon\b/ matches the "oon" in "moon", because "oon" is the end of the string,
// thus not followed by a word character.
// /\w\b\w/ will never match anything, because a word character can never be
// followed by both a non-word and a word character.
