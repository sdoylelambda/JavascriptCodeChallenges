// Oddish vs. Evenish
// Create a function that determines whether a number is Oddish or Evenish.
// A number is Oddish if the sum of all of its digits is odd, and a number is Evenish
// if the sum of all of its digits is even. If a number is Oddish, return "Oddish".
// Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4.
// oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// function oddishOrEvenish(num) {
//   const arr = [1, 2, 3]
//   var x = arr.split('')
//   // for (var i = 0; i < num.toString().length; num++) {
//   //   console.log(i)
//   //   var n = num.charAt(i)
//   //   console.log('n', n)
//   //   arr.push(n)
//   //   if (0 === 0) {
//   //     return 'Evenish'
//   //   } else {
//   //     return 'Oddish'
//   //   }
//   // }
//   console.log(x)
// }

// function oddishOrEvenish(num) {
//   const arr = []
//   console.log(num.toString().length)
//   for (var i = 0; i > num.toString().length; i++) {
//     console.log(i)
//     var n = num.charAt(i)
//     console.log('n', n)
//     // arr.push(n)
//   }
//   if (0 === 0) {
//     return 'Evenish'
//   } else {
//     return 'Oddish'
//   }
//   // console.log(x)
// }

function oddishOrEvenish(num) {
  var arr = Array.from(String(num), Number)
  console.log(arr)
  var x = arr.reduce((a, b) => a + b, 0)
  console.log(x)
  if (x % 2 === 0) {
    console.log('Evenish')
    return 'Evenish'
  } else {
    console.log('Oddish')
    return 'Oddish'
  }
}

// Examples
oddishOrEvenish(43) // ➞ "Oddish"

oddishOrEvenish(373) // ➞ "Oddish"

oddishOrEvenish(4433) // ➞ "Evenish"
