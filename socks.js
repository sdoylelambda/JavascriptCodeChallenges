const n = 9
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20, 10]

function sockMerchant(n, ar) {
  var count = 0
  var loopCount = 0
  var loopCount2 = 1
  var newArr = ar
  // while count
  //   let results = []
  //   for (let i = 0; i < sorted_arr.length - 1; i++) {
  //     console.log('sortPre', sorted_arr[i + 1])
  //     if (sorted_arr[i + 1] === sorted_arr[i]) {
  //       console.log('sortI', sorted_arr[0])
  //       results.push(sorted_arr[i])
  //     }
  for (let i = 0; i < n; i++) {
    var num = ar.slice()[loopCount]
    newArr = ar.slice(loopCount2)
    ar = newArr
    console.log('num', num)
    console.log('newArr', newArr)
    console.log('arr', arr)
    newArr.forEach((v) => {
      if (v === num) {
        count += 0.5
        console.log('count', count)
      }
    })
    console.log('final count', count)
    var answerCount = count / 2
    if (answerCount % 2 !== 0) {
      console.log('if count', count)
      console.log('no pairs')
      var x = answerCount - 0.5
      console.log('x', x)
    } else {
      console.log('else count', count)
      var z = answerCount //  need 2 for pair
      console.log('z', z)
    }
  }
}
sockMerchant(n, arr)

// function sockMerchant(n, ar) {
//   var count = 0
//   var loop1 = arr.forEach((num) => {
//     console.log('num', num)
//   })
//   var loop2 = arr.forEach((num2) => {
//     console.log('num2', num2)
//     if (loop1 === loop2) {
//       // console.log('yes')
//       count += 1
//       console.log('count', count)
//     } else {
//       // console.log('no')
//     }
//   })

//   console.log('finalCount', count)
// }

// sockMerchant(arr)

// function sockMerchant(n, ar) {
//   return arr.map((a) => {
//     // console.log('a', a)
//     return arr.map((b) => {
//       // console.log('b', b)
//       if (a === b) {
//         var count = 0
//         count += 1
//         console.log('loop count:', count)
//       }
//     })
//   })
// return number of pairs of socks(matching numbers)
// console.log('count', count)
// return count
// }

sockMerchant(arr)

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
