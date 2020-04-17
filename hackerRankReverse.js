// UPER
// U
// REVERSE CHARACTERS IN (POSSIBLY NESTED) STRING THAT ARE IN PARANTHESES
// DON'T REVERSE CHARS NOT IN PARANTHESES

// EX: INPUT foo(bar(baz))blim   OUTPUT: foobazrabblim
//    ABOVE ACHIEVED BY:
//    REVERSE INNERMOST STRING: (baz) returns: foo(barzab)blim
//    THEN REVERSE (barzab) RETURNS: foobazrabblim

// EX2: INPUT: foo(bar)baz(blim)boo  OUTPUT: foorabbazmibboo

// NOTES
// TEST CASES ARE (TEST) LIKE EXAMPLES AND (((((((TEST)))))))

function reverseInParentheses(s) {
  // FIND () IN STRING WITH REG EXP
  var regExp = /\(([^)]+)\)/
  var matches = regExp.exec(s)

  // FIND INNERMOST ()
  // REVERSE CHARS
  // NEXT OUTERMOST ()
  // REVERSE CHARS
  //
  console.log(matches)
  const answer = matches[1]
  console.log(answer)
  const reverseString = answer.split('').reverse().join('')
  console.log(reverseString)
  return answer
}

reverseInParentheses('(bar)') // OUTPUT rab

// reverseInParentheses(foo(bar(baz))blim) // OUTPUT: foobazrabblim

// reverseInParentheses(foo(bar)baz(blim)boo) // OUTPUT: foorabbazmibboo

// TESTING
// REG EXP ***
// const str2 = 'I expect five hundred dollars ($500).'
// //outpus $500
// var regExp = /\(\$([^)]+)\)/
// console.log(regExp)

var regExp = /\(([^)]+)\)/
var matches = regExp.exec('I expect five hundred dollars (500).')

//matches[1] contains the value between the parentheses
// console.log(matches[1])

// finds position
// var str = 'Visit W3Schools!'
// var n = str.search('W3Schools')
// console.log(n)

// var str = 'Visit (W3S)chools!'
// var n2 = str.search('()')
// console.log(n2)
