// Tuck in Array
// Create a function that takes two arrays and insert the second array in the middle of the first array.

// function tuckIn(arr1, arr2) {
//   var x = []
//   // for
//   // find middle number
//   var middle = arr1.length / 2
//   console.log('middle', middle)
//   // var outArr = [...arr1, ...x]
//   // outputArr = [...arr1]
//   // outputArr = [...arr2]

//   // insert the second array in the middle of the first array.
//  outArr[middle[...x]]
//   console.log('out:', outArr)

//   return outArr
// }

// RETURNS ARR2 SPREAD INTO ARR1 AFTER FIRST ELEMENT
// * FIRST ARRAY MUST HAVE 2 ELEMENTS *
function tuckIn(arr1, arr2) {
  var lastArr1 = arr1.pop()
  var combinedArr = [...arr1, ...arr2]
  combinedArr.push(lastArr1)
  console.log(combinedArr)
  return combinedArr
}

// Examples
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) // ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15, 150], [45, 75, 35]) // ➞ [15, 45, 75, 35, 150]

tuckIn(
  [
    [1, 2],
    [5, 6],
  ],
  [[3, 4]]
) // ➞ [[1, 2], [3, 4], [5, 6]]
// Notes
// The first array always have two elements.
// Use the spread syntax to solve this challenge.
