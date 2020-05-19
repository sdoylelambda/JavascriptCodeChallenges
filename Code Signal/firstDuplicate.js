// if there are more than 1 duplicated numbers, return the number for which the
// second occurrence has a smaller index than the second occurrence of the other number does.
// If there are no such elements, return -1.

// function firstDuplicate(a) {
//   // a = [2, 1, 3, 5, 3, 2] output = 3
//   // map thru a and store in b
//   let b = a
//   // for a in b return first duplicate
//   for (i in a) {
//     // console.log('i:', i)
//     // console.log('a:', a)
//     const num = a[i]
//     console.log('num', num)
//     b.pop(i)
//     if (b.includes(num)) {
//       console.log('num if:::', num)
//     }
//   }
//   console.log('a', a)
//   return a
// }

// function firstDuplicate(arr) {
//   // a = [2, 1, 3, 5, 3, 2] output = 3
//   // starting from first number
//   for (var i = 0; i < arr.length; i++) {
//     // is it in the arr anywhere else
//     const num = arr[i]
//     console.log('num', num)
//     for (var j = i + 1; j < arr.length - 1; j++) {
//       console.log('j', arr[j])
//       const num2 = arr[j]
//       if (num === num2) {
//         console.log('num', num)
//       } else {
//         console.log('-1', -1)
//         return -1
//       }
//     }
//     // if so return num
//     // } else {
//     //   // else return -1
//     //   console.log('-1', -1)
//     //   return -1
//   }
// }

// function firstDuplicate(a) {
//   // a = [2, 1, 3, 5, 3, 2] output = 3
//   // map thru a and store in b
//   let b = a
//   // for a in b return first duplicate
//   for (i in a) {
//     console.log(a[i])
//     if (b.includes(a[i]) === true) {
//       console.log(b[i])
//       console.log(a[i + 1])
//       return b[i]
//     } else {
//       return -1
//     }
//   }
//   return a
// }

function firstDuplicate(arr) {
  var num = null

  for (var i = 0; i < arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) !== i) {
      num = arr[i]
      // console.log('num', num)
    }
  }
  // console.log('output', num)
  if (num === null) {
    console.log(-1)
    return -1
  } else {
    console.log('num', num)
    return num
  }
}

// Example
// firstDuplicate([2, 1, 3, 5, 3, 2]) // = 3.
// // There are 2 duplicates: numbers 2 and 3. The second occurrence of
// // 3 has a smaller index than the second occurrence of 2 does,
// //so the answer is 3.

// firstDuplicate([2, 2]) // = 2;

// firstDuplicate([2, 4, 3, 5, 1]) // = -1

firstDuplicate([1, 1, 2, 2, 1]) // 2

// const arr = [1,2,2,1] // return 2

// PLAN

// function firstDuplicate(arr) {
//   // GO THRU ARRAY,
//   for (var i = 0; i < arr.length; i++) {
//   //SEE IF NEXT POSITION IS EQUAL TO CURRENT POSITION
//   if (arr)
//   // IF SO RETURN NUMBER

//   // ELSE GO THRU ARRAY AND SEE IF POSITION + 2 = CURRENT NUMBER
//   // THEN 3, 4, 5, ETC
//   // IF NONE RETURN -1
//   }
// }
