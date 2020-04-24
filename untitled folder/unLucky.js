// Unlucky 13
// Given a sorted array of numbers, remove any numbers that are divisible by 13.

// Return the amended array.

function unlucky13(nums) {
  const outArr = []
  nums.forEach((num) => {
    if (num % 13) {
      outArr.push(num)
    }
  })
  console.log(outArr)
  return outArr
}

// Examples
unlucky13([53, 182, 435, 591, 637]) // ➞ [53, 435, 591]
// 182 and 637 are divisible by 13.

unlucky13([24, 316, 393, 458, 1279]) // ➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.

unlucky13([104, 351, 455, 806, 871]) // ➞ []
// All numbers in the array are divisible by 13.
