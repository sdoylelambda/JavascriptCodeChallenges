// Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

// ONE LINER
const diffMaxMin = (arr) => Math.max(...arr) - Math.min(...arr)

// function diffMaxMin(arr) {
// 	return Math.max(...arr) - Math.min(...arr);
// }

// LONG WAY

// function diffMaxMin(arr) {
//   // largest number - smallest number
//   var smallest = Infinity
//   var largest = 0
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     if (arr[i] < smallest) {
//       smallest = arr[i]
//     }
//     if (arr[i] > largest) {
//       largest = arr[i]
//     }
//   }
//   console.log('smallest', smallest)
//   console.log('largest', largest)
//   const answer = (smallest - largest) * -1
//   console.log('answer:::::', answer)
//   return answer
// }

// Examples
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])) // ➞ 82
// Smallest number is -50, biggest is 32.

diffMaxMin([44, 32, 86, 19]) // ➞ 67
// Smallest number is 19, biggest is 86.
