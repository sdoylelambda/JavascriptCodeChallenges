// Vowel Replacer reg ex
// Create a function that replaces all the vowels in a string with a specified character.
// Notes
// All characters will be in lower case.

function replaceVowels(str, ch) {
  const reg = /a|e|i|o|u/gi
  console.log(str.replace(reg, ch))
  return str.replace(reg, ch)
}

// Examples
replaceVowels('the aardvark', '#') // ➞ "th# ##rdv#rk"

replaceVowels('minnie mouse', '?') // ➞ "m?nn?? m??s?"

replaceVowels('shakespeare', '*') // ➞ "sh*k*sp**r*"

const p =
  'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'

const regex = /dog/gi

console.log(p.replace(regex, 'ferret'))
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(p.replace('dog', 'monkey'))
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
