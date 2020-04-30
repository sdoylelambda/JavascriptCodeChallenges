// Even Odd Partition
// Write a function that partitions the array into two subarrays:
// one with all even integers, and the other with all odd integers.
// Return your result in the following format:
// [[evens], [odds]]
// Notes
// Return two empty subarrays if the input is an empty array.
// Keep the same relative ordering as the original array.

function evenOddPartition(arr) {
  evenArr = []
  oddArr = []
  // outputArr = [evenArr, oddArr]
  outputArr = [oddArr, evenArr]
  console.log(arr)
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      evenArr.push(arr[i])
    } else {
      oddArr.push(arr[i])
    }
  }
  console.log('outputArr', outputArr)
  return outputArr
}

// Examples
evenOddPartition([5, 8, 9, 2, 0]) // ➞ [[8, 2, 0], [5, 9]]

// evenOddPartition([1, 0, 1, 0, 1, 0]) // ➞ [[0, 0, 0], [1, 1, 1]]

// evenOddPartition([1, 3, 5, 7, 9]) // ➞ [[], [1, 3, 5, 7, 9]]

// evenOddPartition([]) // ➞ [[], []]
