// Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd number and
// decrementing (-1) for each even number.

function transform(arr) {
  const outputArr = []
  for (var i = 0; i < arr.length; i++) {
    const number = arr[i]
    if (number % 2 === 0) {
      outputArr.push(number - 1)
    } else {
      outputArr.push(number + 1)
    }
  }
  console.log('outputArr', outputArr)
  return outputArr
}

// Examples
transform([1, 2, 3, 4, 5]) // ➞ [2, 1, 4, 3, 6]

transform([3, 3, 4, 3]) // ➞ [4, 4, 3, 4]

transform([2, 2, 0, 8, 10]) // ➞ [1, 1, -1, 7, 9]
// Notes
