// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
// Notes
// Zero is a non-negative integer.

function filterArray(arr) {
  var outputArr = []
  arr.filter((nums) => {
    parseInt(nums) >= 0)
    if (Number(nums) === true) {
      outputArr.push(nums)
    }
  }
  console.log(outputArr)
  
}

// Examples
filterArray([1, 2, 'a', 'b']) // ➞ [1, 2]

filterArray([1, 'a', 'b', 0, 15]) // ➞ [1, 0, 15]

filterArray([1, 2, 'aasf', '1', '123', 123]) // ➞ [1, 2, 123]
