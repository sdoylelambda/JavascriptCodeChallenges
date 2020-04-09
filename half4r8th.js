// Create a function that takes a number and return an array
// of three numbers: half of the number,
// quarter of the number and
// an eighth of the number.

const halfQuarterEighth = (n) => {
  arr = []
  // half of the number,
  half = n / 2
  arr.push(half)
  // quarter of the number
  quarter = n / 4
  arr.push(quarter)
  // an eighth of the number.
  eighth = n / 8
  arr.push(eighth)
  console.log(arr)
  return arr
}

// Examples
console.log(halfQuarterEighth(6)) // ➞ [3, 1.5, 0.75]

console.log(halfQuarterEighth(22)) // ➞ [11, 5.5, 2.75]

console.log(halfQuarterEighth(25)) // ➞ [12.5, 6.25, 3.125]
