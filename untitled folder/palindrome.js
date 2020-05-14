// Palindrome?
// A palindrome is a word that is identical forward and backwards.

// mom
// racecar
// kayak
// Given a word, create a function that checks whether it is a palindrome.

function checkPalindrome(str) {
  // reverse string
  const reverseStr = str.split('').reverse().join('')
  // console.log(reverseStr)

  // check if reverse === str
  if (reverseStr === str) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

// Examples
checkPalindrome('mom') // ➞ true

checkPalindrome('scary') // ➞ false

checkPalindrome('reviver') // ➞ true

checkPalindrome('stressed') //➞ false
