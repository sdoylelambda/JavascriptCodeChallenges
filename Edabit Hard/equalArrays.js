function checkEquals(arr1, arr2) {
  const x = arr1.sort().join(', ')
  console.log('x', x)
  const y = arr2.sort().join(', ')
  console.log('y', y)
  if (x === y) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

checkEquals([11, 2], [1, 12])
