// Create a function that takes an array of numbers and returns only the even values.
// Notes
// Return all even numbers in the order they were given.
// All test cases contain valid numbers ranging from 1 to 3000.

function noOdds(arr) {
  const noOddsArr = []
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if (arr[i] % 2 === 0) {
      noOddsArr.push(arr[i])
    }
  }
  console.log('final', noOddsArr)
  return noOddsArr
}

// Examples
noOdds([1, 2, 3, 4, 5, 6, 7, 8]) // ➞ [2, 4, 6, 8]

noOdds([43, 65, 23, 89, 53, 9, 6]) // ➞ [6]

noOdds([718, 991, 449, 644, 380, 440]) // ➞ [718, 644, 380, 440]
