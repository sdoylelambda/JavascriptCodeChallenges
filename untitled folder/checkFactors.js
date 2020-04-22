// Write a function that returns true if all integers in an array are factors of a number,
// and false otherwise.

function checkFactors(factors, num) {
  var x = true
  factors.forEach((v) => {
    console.log('v', v)
    if (num % v === 0) {
      console.log('v', v)
      var a = console.log('true')
      return x
    } else {
      x = false
    }
  })
  return x
}

// Examples
checkFactors([2, 3, 4], 12) //➞ true
// Since 2, 3, and 4 are all factors of 12.

checkFactors([1, 2, 3, 8], 12) //➞ false
// 8 is not a factor of 12.

checkFactors([1, 2, 50], 100) //➞ true

checkFactors([3, 6], 9) //➞ false
