// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and
// return a new array without the strings.
// Zero is a non-negative integer.

function filterArray(arr) {
  var outputArr = []
  var test = 'a' % 1
  console.log(test)
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if (Number.isInteger(arr[i])) {
      console.log('else', arr[i])
      outputArr.push(arr[i])
    } else {
      console.log(arr[i])
    }
  }
  console.log('output:', outputArr)
  return outputArr
}

// Examples
filterArray([1, 2, 'a', 'b']) // ➞ [1, 2]

filterArray([1, 'a', 'b', 0, 15]) // ➞ [1, 0, 15]

filterArray([1, 2, 'aasf', '1', '123', 123]) // ➞ [1, 2, 123]
