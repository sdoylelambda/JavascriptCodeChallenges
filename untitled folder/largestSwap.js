// Write a function that takes a two-digit number and determines
// if it's the largest of two possible digit swaps.

// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27.
// On the other hand, swapping 43 gives us 34, and 43 > 34.

function largestSwap(num) {
  const rev = num.toString().split('').reverse().join('') //+ num.charAt(index0)
  const ans = Math.sign(num) * parseInt(rev)
  console.log(ans)
  const index0 = ans.toString().split('')[0]
  console.log(index0)
  const index1 = ans.toString().split('')[1]
  console.log(index1)
  if (index0 <= index1) {
    return true
  } else {
    return false
  }
}

// function largestSwap(n) {
//   const reversed = n.toString().split('').reverse().join('') // turn a number into a string, then turn it into an array to reverse.
//   return Math.sign(n) * parseInt(reversed) // Math.sign will return -1 as for negative number, 1 as for position number, 0 as for zero.
// }

console.log(largestSwap(27)) //➞ false   swapping the digits gives us 72, and 72 > 27.

console.log(largestSwap(43)) //➞ true   swapping 43 gives us 34, and 43 > 34.

// const sentence = 'The quick brown fox jumps over the lazy dog.'

// const index = 4

// console.log('The character at index ' + index + ' is ' + sentence.charAt(index))
// // expected output: "The character at index 4 is q"
