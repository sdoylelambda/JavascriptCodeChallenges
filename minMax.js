function minMax(arr) {
  outArr = []
  const min = Math.min(...arr)
  outArr.push(min)
  const max = Math.max(...arr)
  outArr.push(max)
  return outArr
}

console.log(minMax([1, 2, 3, 4, 5])) //➞ [1, 5]

console.log(minMax([2334454, 5])) //➞ [5, 2334454]

console.log(minMax([1])) //➞ [1, 1]
