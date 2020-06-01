// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and
// returns an array of multiples of num up to length.
// Notice that num is also included in the returned array.

function arrayOfMultiples(num, length) {
  const arr = [] // output

  for (var i = 1; i < length + 1; i++) {
    const n = num * i
    arr.push(n)
  }

  console.log('output:::', arr)
  return arr
}

// short way
// const arrayOfMultiples = (num, length) => {
// 	return Array.from({length: length}, (_, i) => num * (i + 1));
// }

// function arrayOfMultiples (num, length) {
// 	return [...Array(length)].map((_, i) => num * (i + 1))
// }

// function arrayOfMultiples (num, length) {
// 	return [...Array(length).keys()].map((e,i)=>(e + 1)*num);
// }

// Examples
arrayOfMultiples(7, 5) // ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) // ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) // ➞ [17, 34, 51, 68, 85, 102]
