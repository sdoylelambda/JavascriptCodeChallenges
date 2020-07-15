// Special Arrays
// An array is special, if
// every even index contains an even number and
// every odd index contains an odd number.
// returns true if an array is special, and false otherwise.

// PLAN
// use a counter
// all together/

// function isSpecialArray(arr) {
//   var counter = 0
// look at each item in the array
// check if even index's are even numbers
// check if odd index's are odd numbers

// if all above are true return true
// else return false

//   for (var i = 0; i < arr.length; i++) {
//     // console.log('i', i)
//     if (i % 2 === 0) {
//       console.log('arr[i]', arr[i])
//       if (arr[i] % 2 != 0) {
//         console.log('+1')
//         counter += 1
//       } else {
//         console.log('else.')
//       }
//     } else {
//       // if (arr[i] % 2 != 0) {
//       // if (i % 2 != 0) {
//       console.log('arr[i]loop', arr[i])
//       if (arr[i] % 2 === 0) {
//         console.log('+1')
//         counter += 1
//       } else {
//         console.log('else...')
//         // counter += 1
//       }
//       // }
//     }
//   }
//   console.log('counter', counter)
//   if (counter === arr.length) {
//     console.log(true)
//     return true
//   } else {
//     console.log(false)
//     return false
//   }
// }

function isSpecialArray(arr) {
  var counter = 0
  for (var i = 0; i < arr.length; i++) {
    // const oddPosition = 'if (i % 2 != 0)'
    // const evenPosition = 'if (i % 2 === 0)'
    if (i % 2 != 0) {
      if (arr[i] % 2 != 0) {
        counter += 1
      }
    }
    if (i % 2 === 0) {
      if (arr[i] % 2 === 0) {
        counter += 1
      }
    }
  }
  console.log('counter', counter)
  if (counter === arr.length) {
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
}

// Examples
// isSpecialArray([11, 22, 33]) // ➞ true

isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) // ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) // ➞ false
// // Index 2 has an odd number 9.

// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) // ➞ false
// // Index 3 has an even number 8.
