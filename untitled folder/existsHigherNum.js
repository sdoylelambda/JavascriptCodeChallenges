// Exists a Number Higher?
// Write a function that returns true if there exists at least one number
// that is larger than or equal to n.
// Notes
// Return false for an empty array [].

// function existsHigher(arr, n) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     if (arr[i] >= n) {
//       console.log('true')
//       return true
//     } else {
//       console.log('false')
//       return false
//     }
//   }
// }

function existsHigher(arr, n) {
  const sortedArr = arr.sort(function (a, b) {
    return a - b
  })
  console.log(sortedArr)
  const x = sortedArr.pop()
  console.log(x)
  if (x >= n) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

// Examples
existsHigher([5, 3, 15, 22, 4], 10) // ➞ true

existsHigher([1, 2, 3, 4, 5], 8) // ➞ false

existsHigher([4, 3, 3, 3, 2, 2, 2], 4) // ➞ true

existsHigher([], 5) // ➞ false

// var numbers = [4, 2, 5, 1, 3]
// numbers.sort(function (a, b) {
//   return a - b
// })
// console.log(numbers)

// [1, 2, 3, 4, 5]
