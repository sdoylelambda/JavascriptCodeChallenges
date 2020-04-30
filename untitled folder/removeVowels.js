// Fix the Error: Vowel Edition
// Your friend is trying to write a function that removes all vowels from a string. They write:

function removeVowels(str) {
  const answer = str.replace(/[aeiou]/g, '')
  console.log(answer)
  return answer
}

// However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.

// Examples
removeVowels('candy') // ➞ "cndy"

removeVowels('hello') // ➞ "hllo"
// The "e" is removed, but the "o" is still there!

removeVowels('apple') // ➞ "pple"
