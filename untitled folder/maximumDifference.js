// Maximum Difference
// Given an array of integers, return the difference between the
// largest and smallest integers in the array.

function difference(nums) {
  var currentLargest = 0
  var currentSmallest = 1000000000
  // find largest and smallest in nums
  nums.forEach((num) => {
    if (num >= currentLargest) {
      currentLargest = num
    }
  })
  nums.forEach((num) => {
    // get smallest by
    if (num <= currentSmallest) {
      currentSmallest = num
    }
  })
  console.log(currentLargest - currentSmallest)
  return currentLargest - currentSmallest
}

// subtract smallest from largest = x

// return x

// Examples
difference([10, 15, 20, 2, 10, 6]) //➞ 18
// 20 - 2 = 18

difference([-3, 4, -9, -1, -2, 15]) // ➞ 24
// 15 - (-9) = 24

difference([4, 17, 12, 2, 10, 2]) //➞ 15
