// Burrrrrrrp
// Create a function that returns the string "Burp" with the amount of "r's"
// determined by the input parameters of the function.
// Notes
// Expect num to always be >= 1.
// Remember to use a capital "B".
// Don't forget to return the result.

function longBurp(num) {
  var r = 'r'
  console.log('Bu' + r.repeat(num) + 'p')
  return 'Bu' + r.repeat(num) + 'p'
}

// Examples
longBurp(3) // ➞ "Burrrp"

longBurp(5) // ➞ "Burrrrrp"

longBurp(9) // ➞ "Burrrrrrrrrp"
