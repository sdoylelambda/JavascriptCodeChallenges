// Given an array of numbers, negate all elements contained within.

function negate(arr) {
  const newArr = []
  arr.forEach((a) => {
    // console.log(a * -1)
    newArr.push(a * -1)
    // console.log('newArr', newArr)
  })
  console.log('newArr', newArr)
  return newArr
}

negate([1, 2, 3, 4]) //➞ [-1, -2, -3, -4]

negate([-1, 2, -3, 4]) //➞ [1, -2, 3, -4]

negate([]) //➞ []
