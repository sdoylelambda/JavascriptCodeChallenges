// The function is expected to return a BOOLEAN.
// The function accepts STRING string as parameter.

// UPER
// INPUT: STRING - CONTAINS UP TO 4 TYPES OF BRACKETS
// [],(),{},||
// OUTPUT: BOOL
// TRUE IF STRING HAS EQUAL BRACKETS
// FALSE IF STRING HAS MORE BRACKETS ON ONE SIDE OR THE OTHER

// EX
// [(]) => FALSE
// FOO(BAR)BAZ => TRUE
// NO BRACKETS => TRUE

// I (WA)N{T to buy a on}esie[...] b(u{[t] kno}w it) won't suit me. => TRUE

// PLAN
// IDEAS
// USE REG EX, MAYBE WITH A LOOP AND OR COUNTER

// HOW TO TELL IS BALANCED?
// BALANCED
// IF HAS AS MANY OPENING BRACKETS OF A GIVEN TYPE AS CLOSING BRACKETS OF SAME TYPE - BALANCED
// IF BRACKET HAS UNMATCHED BRACKET - UNBALANCED
// OVERLAPPING BRACKET - UNBALANCED - EX: [(])

// WHAT CAN I GOOGLE BESIDES THE EXACT QUESTION?
// regex brackets

// add regex symbols to arr, then arr % 2 - if true return true
// should i do regEx for each direction of each bracket?
// seems like it would work except in else if...

function balancedBrackets(string) {
  var bracketBucket = []
  // const outputArr = bracketBucket.slice('d', 'o', 'g')
  const regExLeftBracket = /\[/g
  const regExRightBracket = /\]/g
  const regExRightParanth = /\)/g
  const regExLeftParanth = /\(/g
  const regExVertical = /\[[^\]]*\]/
  console.log(string.match('regExVertical', regExVertical))
  // console.log(string.match(regExLeftBracket))
  // console.log(string.match(regExRightBracket))
  // console.log(string.match(regExLeftParanth))
  // console.log(string.match(regExRightParanth))
  console.log(string.match(regExVertical))
  for (var i = 0; i < string.length; i++) {
    console.log('i', string.charAt(i))
    const char = string.charAt(i)
    bracketBucket.push(char)
    const regExLeftParanth = /\(/g
    console.log(string.match(regExLeftParanth))
    // if (char.match(regExRightBracket)) {
    // }
  }
  console.log('bracketBucket:', bracketBucket)
  // IF HAS AS MANY OPENING BRACKETS OF A GIVEN TYPE AS CLOSING BRACKETS OF SAME TYPE - BALANCED
  if (bracketBucket % 2 === 0) {
    // IF BRACKET HAS UNMATCHED BRACKET - UNBALANCED
    if (0 === 0) {
      return true
    } else {
      return false
    }
  }
}

balancedBrackets('[(])') // false
balancedBrackets('[(dog)]') // true
