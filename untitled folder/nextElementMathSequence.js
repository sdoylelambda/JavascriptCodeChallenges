// Next Element in Arithmetic Sequence
// Create a function that returns the next element in an arithmetic sequence.
// In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

function nextElement(arr) {
  const next = arr[0] - arr[1]
  console.log('next', next)
  const last = arr.length - 1
  console.log('last', arr[last])
  const output = -1 * next + arr[last]
  console.log('output:', output)
  return output
}

// Examples
nextElement([3, 5, 7, 9]) // ➞ 11

nextElement([-5, -6, -7]) // ➞ -8

nextElement([2, 2, 2, 2, 2]) // ➞ 2
