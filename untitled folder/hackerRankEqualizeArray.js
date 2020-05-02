// * The function is expected to return an INTEGER.
// * The function accepts INTEGER_ARRAY arr as parameter.

// function equalizeArray(arr) {
//   var count = 0
//   var outArr = []
//   // put input arr in order
//   const sortedArr = arr.sort()
//   // console.log(sortedArr)
//   // compare i to i+1 if same add to newArr
//   for (var i = 0; i < arr.length; i++) {
//     // console.log('i:', arr[i])
//     for (var x = i + 1; x < arr.length - 1; x++) {
//       console.log('x:', arr[x])
//       console.log('i:', arr[i])
//       if (arr[x] === arr[i]) {
//         console.log('+1 count')
//         count += 1
//         outArr.push(x)
//         outArr.push(i)
//         console.log('outarr:', outArr)
//       }
//     }
//   }
//   // compare length input arr to new Arr
//   // return difference
//   console.log('outarr:', outArr)
//   console.log('count', count)
//   return count
// }

// equalizeArray([3, 3, 2, 1, 3]) // return 2

// arInOrder = [1, 2, 3, 3, 3]
// compare each num to next
// newArr = [3, 3, 3]
// compare length of both arrays
// return 2

function equalizeArray(arr) {
  let map = {}
  var count = 0
  var outArr = []
  // put input arr in order
  const sortedArr = arr.sort()
  console.log(sortedArr)
  // compare i to i+1 if same add to newArr
  for (var i = 0; i < arr.length; i++) {
    console.log('i:', arr[i])
    console.log('i + 1:', arr[i + 1])
    if (arr[i] === arr[i + 1]) {
      console.log('plus 1')
      count += 1
    }
  }
  if (count != 0 && count % 2 != 0) {
    count += 1
  }
  // compare length input arr to new Arr
  // return difference
  console.log('outarr:', outArr)
  console.log('count', count)
  const output = arr.length - count
  console.log('return:', output)
}

equalizeArray([3, 3, 2, 1, 3]) // return 2
