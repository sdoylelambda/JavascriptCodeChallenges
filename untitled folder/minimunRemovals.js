// Minimum Removals to Make Sum Even
// Create a function that returns the minimum number of removals to make the
// sum of all elements in an array even.
// If the sum is already even, return 0 (see example #2).
// The output will be either 0 or 1.

function minimumRemovals(arr) {
  // is sum of arr even?
  const arrTotal = addArr(arr)
  // WORKING IF STATEMENT, REFACTORED TO TERNARY OPERATOR.
  // console.log(arrTotal)
  // even arr
  // if (arrTotal % 2 === 0) {
  //   console.log('1')
  //   return 1
  //   // odd arr
  // } else {
  //   console.log('0')
  //   return 0
  // }
  // ternary refactor
  // return (isMember ? '$2.00' : '$10.00');
  const x = arrTotal % 2 === 0 ? 0 : 1
  console.log('x', x)
  return x
}

// Examples
minimumRemovals([1, 2, 3, 4, 5]) // ➞ 1

minimumRemovals([5, 7, 9, 11]) // ➞ 0

minimumRemovals([5, 7, 9, 12]) // ➞ 1

// console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0))
// console.log([].reduce((a, b) => a + b, 0))

function addArr(arr) {
  return arr.reduce((a, b) => a + b, 0)
}

// notes
function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00'
}

console.log(getFee(true))
// expected output: "$2.00"

console.log(getFee(false))
// expected output: "$10.00"
