const n = 9
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]

// UPER
// U 

function sockMerchant(n, arr) {
  var count = 0
  const sortedArr = arr.sort()
  console.log('arr start::', sortedArr)
  for (var i = 0; i < sortedArr.length; i++) {
      console.log(sortedArr[i])
      if (sortedArr[i] === sortedArr[i+1]) {
          count ++
          sortedArr.shift()
          sortedArr.shift()
          console.log('shift 2::', sortedArr)
          console.log('count=', count)
          i--
      } else {
          sortedArr.shift()
          console.log('else: shift 2::', sortedArr)
          console.log('count=', count)
          i--
      }
  }
  console.log('output=', count)
  return count
}

sockMerchant(n,arr)