function firstArg() {
  var first = undefined
  for (i = 0; i < arguments.length; i++) {
    first = arguments[0]
    console.log('first', first)
  }
  console.log('first2', first)
  return first
}

function lastArg() {
  var last = undefined
  for (i = 0; i < arguments.length; i++) {
    last = arguments[arguments.length - 1]
  }
  console.log('last', last)
  return last
}

firstArg(1, 2, 3) // 1

lastArg(1, 2, 3) //➞ 3

firstArg(8) //➞ 8

lastArg(8) //➞ 8

lastArg(), undefined

function longestString() {
  var longest = ''
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      console.log(arguments[i])
      longest = arguments[i]
    }
  }
  console.log(longest)
  return longest
}

longestString('hello what we', 'what what what what what what ')
