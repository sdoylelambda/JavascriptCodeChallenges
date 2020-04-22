// This is a reverse coding challenge. Normally you're given explicit directions with how to
// create a function. Here, you must generate your own function to satisfy the
// relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.

function mysteryFunc(arr, num) {
  var outArr = []
  // if int % arr.value => output 0
  arr.forEach((n) => {
    console.log('n', n)
    var outValue = n % num
    console.log('outValue', outValue)
    outArr.push(outValue)
  })
  // if not remander value
  console.log(outArr)
  return outArr
}

mysteryFunc([5, 7, 8, 2, 1], 2) //  ➞ [1, 1, 0, 0, 1]

// Examples
// [5, 7, 8, 2, 1], 2 ➞ [1, 1, 0, 0, 1]
// input(arr, int) output = arr
// if int % arr.value => output 0
// if not remander value

// [9, 8, 16, 47], 4 ➞ [1, 0, 0, 3]

// [17, 11, 99, 55, 23, 1], 5 ➞ [2, 1, 4, 0, 3, 1]

// [6, 1], 7 ➞ [6, 1]

// [3, 2, 9], 3 ➞ [0, 2, 0]

// [48, 22, 0, 19, 33, 100], 10 ➞ [8, 2, 0, 9, 3, 0]
