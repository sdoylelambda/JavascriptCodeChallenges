// Filter by Digit Length
// Create a function that filters out an array to include numbers who only have a
// certain number of digits.
// If no numbers of the specified digit length exist, return an empty array.
// If all numbers in the array have the specified digit length, return original array.
// The sub-array returned should have the same relative order as the original array.

function filterDigitLength(arr, num) {
  const outputArr = []
  for (var i = 0; i < arr.length; i++) {
    // get length of each number
    var arrValString = arr[i].toString().length
    // console.log('arrValString', arrValString)
    if (arrValString === num) {
      outputArr.push(arr[i])
    }
  }
  console.log(outputArr)
  return outputArr
}

// Examples
filterDigitLength([88, 232, 4, 9721, 555], 3) // ➞ [232, 555]
// Include only numbers with 3 digits.

filterDigitLength([2, 7, 8, 9, 1012], 1) // ➞ [2, 7, 8, 9]
// Include only numbers with 1 digit.

filterDigitLength([32, 88, 74, 91, 300, 4050], 1) // ➞ []
// No numbers with only 1 digit exist => return empty array.

filterDigitLength([5, 6, 8, 9], 1) // ➞ [5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array.
