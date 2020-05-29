// Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

function findEvenNums(num) {
  const arr = []

  var n = num
  for (var i = 0; i < num; i++) {
    console.log(i)
    if (i % 2 === 0 && i != 0) {
      arr.push(i)
    }
  }
  if (num % 2 === 0) {
    arr.push(num)
  }
  console.log('arr', arr)
  return arr
}

// Examples
// findEvenNums(8) // ➞ [2, 4, 6, 8]

// findEvenNums(4) // ➞ [2, 4]

// findEvenNums(2) // ➞ [2]

// findEvenNums(1) // , [])
// findEvenNums(9) // , [2, 4 ,6, 8]
findEvenNums(11) // , [2, 4 ,6, 8, 10]
