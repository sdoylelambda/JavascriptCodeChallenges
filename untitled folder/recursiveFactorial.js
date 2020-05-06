// Recursion: Factorials
// Write a function that calculates the factorial of a number recursively.

function factorial(n) {
  if (n < 0) {
    // console.log('-1')
    return -1
  } else if (n === 0) {
    // console.log('1')
    return 1
  } else {
    const x = n * factorial(n - 1)
    console.log(x)
    return x
  }
}

// Examples
factorial(5) // ➞ 120

factorial(3) // ➞ 6

factorial(1) // ➞ 1

factorial(0) // ➞ 1
