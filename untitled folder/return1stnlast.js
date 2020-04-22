// Return the First and Last Elements in an Array
// Create a function that takes an array of numbers and return the first and last elements as a new array.

function firstLast(arr) {
  outArr = []
  var firstChar = arr[0]
  outArr.push(firstChar)
  console.log('firstChar', firstChar)
  var last = arr.length - 1
  console.log('last', last)
  var secondChar = arr[last]
  console.log('secondChar', secondChar)
  outArr.push(secondChar)
  console.log('outArr:::::', outArr)
  return outArr
}

// Examples
firstLast([5, 10, 15, 20, 25]) // ➞ [5, 25]

firstLast(['edabit', 13, null, false, true]) // ➞ ["edabit", true]

firstLast([undefined, 4, '6', 'hello', null]) // ➞ [undefined, null]
