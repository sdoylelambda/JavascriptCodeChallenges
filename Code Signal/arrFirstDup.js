// Find first duplicate in an array

// ? is arr sorted? - must be for my solution

function firstDuplicate(arr) {
  const sortedArr = arr.sort()
  console.log('sortedArr', sortedArr)
  var dupNum = 0
  for (var i = 0; i < sortedArr.length; i++) {
    const num1 = sortedArr[i]
    console.log('num1', num1)
    const num2 = sortedArr[i + 1]
    console.log('num2', num2)
    if (num1 === num2) {
      dupNum = num1
    }
    // else {
    //   console.log('No duplicates')
    //   return 'No duplicates'
    // }
    // return dupNum
  }
  console.log(dupNum)
  return dupNum
}

// ex:
firstDuplicate([1, 2, 3, 4, 4, 5]) // ==> 4

// for unsorted arr
