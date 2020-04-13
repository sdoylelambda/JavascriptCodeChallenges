const arr = [1, 2, 4, 5, 0]

function multiplyByLength(arr) {
  const newArr = []
  arr.forEach((a) => newArr.push(a * 2))
  return newArr
}

console.log(multiplyByLength(arr))

// const arr = [1, 2, 4, 5, 0]

// function multiplyByLength(arr) {
//   for (a in arr) {
//     console.log(a)
//     // const x = a * 2
//     // const newArr = []
//     // newArr.push(x)
//   }
//   // return newArr
// }

// console.log(multiplyByLength(arr))
