// Remove Null from an Array
// Create a function to remove all null values from an array.

function removeNull(arr) {
  const outputArr = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != null) {
      outputArr.push(arr[i])
    }
  }
  console.log(outputArr)
  return outputArr
}

// Examples
removeNull(['a', null, 'b', null]) // ➞ ["a", "b"]

removeNull([null, null, null, null, null]) // ➞ []

removeNull([7, 8, null, 9]) // ➞ [7, 8, 9]
