// Reversing a Binary String
// Write a function that takes an integer n, reverses the binary representation of that integer,
// and returns the new integer from the reversed binary.

function reversedBinaryInteger(num) {
  // convert num to binary
  var binNum = num.toString(2)

  // reverse all values
  var reverseBin = binNum.split('').reverse().join('')

  // turn binary to number
  var reversedNumber = parseInt(reverseBin, 2)

  // return number
  console.log('reversedNumber', reversedNumber)
  return reversedNumber
}

// function reversedBinaryInteger(num) {
//   var reversedNumber = 0
//   var arr = []
//   // convert num to binary
//   var binNum = num.toString(2)
//   console.log(binNum)

//   // reverse all values
//   for (var i = 0; i < binNum.length; i++) {
//     const num = binNum.charAt(i)
//     console.log(num)
//     if (num == 1) {
//       arr.push(0)
//     } else {
//       arr.push(1)
//     }
//   }

//   var reverseBin = arr.join('')
//   console.log('reverseBin', reverseBin)

//   // turn binary to number
//   reversedNumber = parseInt(reverseBin, 2)

//   // return number
//   console.log('reversedNumber', reversedNumber)
//   return reversedNumber
// }

// Examples
reversedBinaryInteger(10) // ➞ 5
// 10 = 1010 -> 0101 = 5

reversedBinaryInteger(12) // ➞ 3
// 12 = 1100 -> 0011 = 3

reversedBinaryInteger(25) // ➞ 19
// 25 = 11001 -> 10011 = 19

reversedBinaryInteger(45) // ➞ 45
// 45 = 101101 -> 101101 = 45
