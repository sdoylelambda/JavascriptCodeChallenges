// Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down
// from this number to zero.
// The argument will always be greater than or equal to zero.

function countdown(start) {
  const outputArr = []
  // for start number
  // add from that number down to zero
  for (var i = start; i >= 0; i--) {
    const num = i
    console.log('num', num)
    outputArr.push(i)
  }

  console.log('outputArr:', outputArr)
  return outputArr
}

// Examples
countdown(5) // ➞ [5, 4, 3, 2, 1, 0]

countdown(1) // ➞ [1, 0]

countdown(0) // ➞ [0]
