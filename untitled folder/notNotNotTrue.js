// Not Not Not True
// Something which is not true is false, but something which is not not true is true!
// Create a function where given n number of "not", evaluate whether it's true or false.
// Even though this challenge can be easily solved through the use of an if | else block,
// you might want to solve it through the use of a Boolean Logic Operator or a Bitwise
// Operator, taking the opportunity to become acquainted with these methods

function notNotNot(n, bool) {
  console.log('bool', bool * 20)
  const a = n * ~bool
  console.log(a)
  if (a % 2 === 0) {
    console.log('false')
    return false
  } else {
    console.log('true')
    return true
  }
}

// Examples
notNotNot(1, true) // ➞ false
// Not true

notNotNot(2, false) // ➞ false
// Not not false

notNotNot(6, true) // ➞ true
