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
// 2 (()) CANCELS OUT

// function reverseInParentheses(s) {
//   // FIND () IN STRING WITH REG EXP
//   var regExp = /\(([^)]+)\)/
//   var matches = regExp.exec(s)

//   // FIND INNERMOST ()
//   // REVERSE CHARS
//   // NEXT OUTERMOST ()
//   // REVERSE CHARS
//   //
//   console.log(matches)
//   const answer = matches[1]
//   console.log(answer)
//   const reverseString = answer.split('').reverse().join('')
//   console.log(reverseString)
//   return reverseString
// }

// reverseInParentheses('(bar)') // OUTPUT rab

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

function reverseInParentheses(s) {
  // FIND () IN STRING WITH REG EXP
  var firstExp = /^[^()]+/
  var regExp = /\(([^)]+)\)/
  var innerExp = /\(([^\(\)]+)\)/
  var firstPart = firstExp.exec(s)
  var lastPart = s.split('').reverse().join('')
  console.log('firstExp', firstPart)
  var matches = regExp.exec(s)
  console.log('matches', matches)
  var matchesInner = innerExp.exec(s)
  console.log('matchesInner', matchesInner)

  // FIND INNERMOST ()
  console.log('matchesInner', matchesInner)
  const answerInner = matches[1]
  console.log('answerInner', answerInner)
  const firstWord = firstPart
  const lastWord = lastPart
  console.log('firstWord', firstWord)
  console.log('lastWord', lastWord)
  const reverseInnerString = answerInner.split('').reverse().join('')
  console.log('reverseInnerString', reverseInnerString)
  // REVERSE CHARS
  // NEXT OUTERMOST ()
  // REVERSE CHARS
  //
  console.log(matches)
  const answer = matches[1]
  console.log('answer', answer)
  const reverseString = answer.split('').reverse().join('')
  console.log('reverseString', reverseString)

  // string.concat(value1, value2, ... value_n);
  const z = firstWord[0].concat(reverseString)
  const r = z.concat(lastWord)
  console.log('reverseStringLast', z)
  return reverseString
}

// reverseInParentheses('(bar)') // OUTPUT rab
reverseInParentheses('foo(bar)baz') // foorabbaz

// reg exp for inntemost () = /\(([^\(\)]+)\)/
