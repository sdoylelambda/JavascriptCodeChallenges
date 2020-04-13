const n = 9
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(n, ar) {
  arr.map((a) => {
    // console.log('a', a)
    arr.map((b) => {
      // console.log('b', b)
      if (a === b) {
        const count = 0
        // count += 1
        console.log('loop count:', count)
      }
    })
  })
  // return number of pairs of socks(matching numbers)
  // console.log('count', count)
  // return count
}

sockMerchant()

// function sockMerchant(n, ar) {
//   for (a in arr) {
//     console.log('a', a)
//     for (b in arr) {
//       console.log('b', b)
//     }
//   }
//   // return number of pairs of socks(matching numbers)
// }

// sockMerchant()

// var isLeapYear = function (year) {
//   return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
// }

// var count = 0

// for (i = 2001; i < 3000; i++) {
//   if (isLeapYear(i)) {
//     count++
//     console.log('count', count)
//   }
// }
// console.log(isLeapYear())
