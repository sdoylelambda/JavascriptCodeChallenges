// Max of Array Queries

// * Complete the 'maxArrayQueries' function below.
// *
// * The function is expected to return an INTEGER.
// * The function accepts following parameters:
// *  1. INTEGER n - number of zeros in initial array
// *  2. 2D_INTEGER_ARRAY queries
//            each sub array has 3 values - start, end, k
//            k === num added to array from start to end indices

// need to loop thru and do to all

function maxArrayQueries(n, queries) {
  let arr = new Array(n).fill(0)
  var outArr = arr
  queries.forEach((quir) => {
    var x0 = quir[0]
    var x1 = quir[1]
    var x2 = quir[2]
    // for position x0(start) to x1(end)
    for (var i = x0 - 1; i < x1; i++) {
      var positionPoint = i
      outArr[i] = outArr[i] + x2
    }
  })
  //  return an INTEGER.
  const answer = Math.max(...outArr)
  console.log('outanswer', answer)
  return answer
}

// function maxArrayQueries(n, queries) {
//   console.log(n)
//   console.log(queries[0])
//   // create array with n zeros
//   // var arr = new Uint8Array(n)

//   let arr = new Array(n).fill(0)
//   // Array.from(Array(10), () => i++)
//   var outArr = arr
//   console.log('arr', arr)
//   queries.forEach((quir) => {
//     console.log('quir', quir)
//     quir.forEach((num) => {
//       console.log('num::::', num)
//       var x0 = quir[0]
//       console.log('x0', x0)
//       var x1 = quir[1]
//       console.log('x1', x1)
//       var y = quir[2]
//       for (var i = x0 - 1; i < x1 - 1; i++) {
//         console.log('i:::', i)
//         console.log('x:::1', x1)
//         arr.splice(i, 1, y)

// console.log('splice', arr.splice(x0, 1, x2))
//         console.log('for arr:', arr)
//       }
//     })
//     // var firstQueries = queries[0]
//     // // x = get first 2 values from 1st arr in queries
//     // var x0 = firstQueries[0]
//     // console.log('x0', x0)
//     // var x1 = firstQueries[1]
//     // console.log('x1', x1)
//     // var y = firstQueries[2]
//     // console.log('y', y)
//   })

//   // var firstQueries = queries[0]
//   // // x = get first 2 values from 1st arr in queries
//   // var x0 = firstQueries[0]
//   // console.log('x0', x0)
//   // var x1 = firstQueries[1]
//   // console.log('x1', x1)
//   // var y = firstQueries[2]
//   // console.log('y', y)

//   // output array from x0 => x1 add y
//   // for all values in array from x0 - x1 add y

//   // const range = new Range()

//   // // Start range at second paragraph
//   // range.setStartBefore(queries[1])

//   // // End range at third paragraph
//   // range.setEndAfter(queries[2])

//   // // Get window selection
//   // const selection = window.getSelection()

//   // // Add range to window selection
//   // selection.addRange(range)
//   // console.log('range', range)

//   // for (var i = x0 - 1; i < x1 - 1; i++) {
//   //   console.log('i', i)
//   //   console.log('x1', x1)
//   //   arr.splice(i, 1, y)
//   // }

//   // arr.splice(0, 1, y)
//   console.log('outarr', outArr)
//   // arr.splice(1, 1, y)
//   // console.log('outarr', outArr)

//   // y = get third value from 1st arr in queries
//   // add y to x positions
//   // repeat for all arrays in queries

//   //  return an INTEGER.
//   console.log('FINALEND:>', Math.max(...outArr))
//   const answer = Math.max(...outArr)
//   console.log('outanswer', answer)
//   return answer
//   // outArr.forEach(num => {

//   // })
// }

// WORKING

// function maxArrayQueries(n, queries) {
//   let arr = new Array(n).fill(0)
//   var outArr = arr
//   console.log('arr', arr)
//   queries.forEach((quir) => {
//     console.log('quir', quir)
//     // quir.forEach((num) => {
//     // console.log('num::::', num)
//     var x0 = quir[0]
//     // console.log('x0', x0)
//     var x1 = quir[1]
//     // console.log('x1', x1)
//     var x2 = quir[2]
//     // console.log('x2', x2)
//     // in output arr

//     // for position x0(start) to x1(end)
//     for (var i = x0 - 1; i < x1; i++) {
//       console.log('i', i)
//       console.log('outArr[i]', outArr[i])
//       var positionPoint = i
//       // add x2 to each point
//       outArr[i] = outArr[i] + x2
//       console.log('outArr[i]::out:::', outArr[i])
//       // outArr.splice(i, i, x2)
//       console.log('for arr:', outArr)
//     }
//     // })
//   })

//   console.log('outarr', outArr)

//   //  return an INTEGER.
//   console.log('FINALEND:>', Math.max(...outArr))
//   const answer = Math.max(...outArr)
//   console.log('outanswer', answer)
//   return answer
// }

// n = 5
// queries = [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]
maxArrayQueries(10, [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
])

// ex
// n = 10 ---> number of zeros in initial array
// queries = [[1,5,3],[4,8,7],[6,9,1]]
// indices->	                    1 2 3  4  5 6 7 8 9 10
//                               [0,0,0, 0, 0,0,0,0,0, 0]
// add 3 to elements 1 thru 5->  [3,3,3, 3, 3,0,0,0,0, 0]
// add 7 to elements 4 thru 8->  [3,3,3,10,10,7,7,7,0, 0]
// add 1 to elements 6 thru 9->  [3,3,3,10,10,8,8,8,1, 0]
// largest value in array is 10
// so return 10
