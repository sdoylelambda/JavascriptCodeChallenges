// Sort by Answer
// Given an array of math expressions,
// create a function which sorts the array by their answer.
// It should be sorted in ascending order.

// If multiple expressions have the same answer, put them in the order of which they appear (see example #2).
// You won't need to worry about divisions by zero.
// The symbol used for multiplication is x instead of *.

// function sortByAnswer(arr) {
//   const outputArr = []
//   // get sum of each expression
//   // add smallest sum to arr
//   // sort?
//   // brute force -- turn strings to nums and solve compare to each other solution
//   var tempValue = '' // current Highest Sum
//   var x = '1 * 5'
//   console.log(eval(x))
//   // for loop,
//   for (var i = 0; i < arr.length; i++) {
//     const sum = eval(arr[i])
//     console.log('sum', sum)
//     // eval
//     for (var y = 0; y < arr.length; y++) {
//       const q = eval(arr[y])
//       console.log('q', q)
//       // nested loop
//       // eval
//       // compare
//       if (q > sum) {
//         outputArr.push(sum)
//       }
//     }
//   }
//   console.log('output', outputArr)
//   return outputArr
// }

function sortByAnswer(arr) {
  const outputArr = []
  const tempDict = {}
  var tempArr = arr
  var tempValue = '' // current Highest Sum

  for (var i = 0; i < arr.length; i++) {
    const sum = eval(arr[i])
    console.log('sum', sum)

    for (var y = 0; y < arr.length; y++) {
      const q = eval(arr[y])
      console.log('q', q)
      if (q > sum) {
        outputArr.push(arr[i])
      }
    }
  }
  console.log('output', outputArr)
  return outputArr
}

// Examples
// sortByAnswer(['1 + 1', '1 + 7', '1 + 5', '1 + 4']) // ➞ ["1 + 1", "1 + 4", "1 + 5", "1 + 7"]

// sortByAnswer(['4 - 4', '2 - 2', '5 - 5', '10 - 10']) // ➞ ["4 - 4", "2 - 2", "5 - 5", "10 - 10"]

// sortByAnswer(['2 + 2', '2 - 2', '2 * 1']) // ➞ ["2 - 2", "2 * 1", "2 + 2"]

// var str = '12:00:32'

// var br = //

// console.log([] == [])
// var a = []
// var b = []
// if (a == b) {
//   console.log('ssdd')
// }

// var v = 1

// var f1 = function () {
//   console.log(v)
// }

// var f2 = function () {
//   var v = 2
//   f1()
// }

// console.log(f2())

// class X {
//   get Y() {
//     return 42
//   }
// }

// console.log(x.get('Y')

function sum(x, y) {
  return x + y
}

let diff = function (x, y) {
  return x - y
}

console.log(sum(10, 20))
console.log(diff(10, 20))
