// A Redundant Function -  Closure
// Write a function redundant that takes in a string str and returns a function that returns str.

const redundant = (str) => () => str

// 2nd way
// function redundant(str) {
// 	return () => str;
// }

// 3rd way
// function redundant(str) {
//   return function () {
//     console.log(str)
//     return str
//   }
// }

// Examples
const f1 = redundant('apple')
f1() // ➞ "apple"

const f2 = redundant('pear')
f2() // ➞ "pear"

const f3 = redundant('')
f3() // ➞ ""
