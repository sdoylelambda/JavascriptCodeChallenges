// Remove the First and Last Characters
// Create a function that removes the first and last characters from a string.
// If the string is 2 or fewer characters long, return the string itself (See Example #4).

function removeFirstLast(str) {
  console.log(str.length)
  if (str.length <= 2) {
    console.log('str', str)
    return str
  } else {
    // console.log('slice', str.slice(1))
    var x = str.slice(1, str.length - 1)
    // console.log('first', first)
    // console.log('slice', str.length - 1 str.slice(1))
    // var x = first.slice(0, str.length - 1)
    console.log('x', x)
    return x
  }
}

// Examples
removeFirstLast('hello') // ➞ "ell"

removeFirstLast('maybe') // ➞ "ayb"

removeFirstLast('benefit') // ➞ "enefi"

removeFirstLast('a') // ➞ "a"

// let str = '12345.00'
// str = str.substring(0, str.length - 1)
// console.log('EX', str)
