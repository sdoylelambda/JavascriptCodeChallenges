// var str = 'Give 100%!'
// var patt1 = /\d/g
// console.log(patt1)

// function myFunction() {
//   var str = 'Give 100%!'
//   var patt1 = /\d/g
//   var result = str.match(patt1)
//   console.log(result)
// }

// myFunction

const text = '4A quick fox0'

const regexpLastWord = /^(\(\d{3}\)|^\d{3}[.-]?)?\d{3}[.-]?\d{4}$/
console.log(text.match(regexpLastWord))
