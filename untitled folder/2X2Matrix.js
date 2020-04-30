// Calculate Determinant of a 2x2 Matrix
// Create a function to calculate the determinant of a 2 x 2 matrix.
// The determinant of the following matrix is: ad - bc:
// [[a, b], [c, d]]

function calcDeterminant(matrix) {
  // The determinant of the following matrix is: ad - bc:
  // [[a, b], [c, d]]
  // console.log(matrix[0])
  const adArr = matrix[0]
  // console.log(adArr[0])
  const a = adArr[0]
  const b = adArr[1]
  console.log('a', a)
  console.log('b', b)

  const bcArr = matrix[1]
  // console.log(adArr[0])
  const c = bcArr[0]
  const d = bcArr[1]
  const first = a * d
  const second = b * c
  console.log(first - second)
  return first - second
}

// Examples
calcDeterminant([
  [1, 2],
  [3, 4],
]) // ➞ -2

calcDeterminant([
  [5, 3],
  [3, 1],
]) // ➞ -4

calcDeterminant([
  [1, 1],
  [1, 1],
]) // ➞ 0
