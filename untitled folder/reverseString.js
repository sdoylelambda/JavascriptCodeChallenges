// Reverse the Order of a String
// Create a function that takes a string as its argument and returns the string in reversed order.

function reverse(str) {
  var arr = []
  var x = str.length
  console.log(x)
  for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i))
    arr.push(str.charAt(i))
  }
  var output = arr.reverse().join('')
  console.log(output)
  return output
}

// Examples
reverse('Hello World') // ➞ "dlroW olleH"

reverse('The quick brown fox.') // ➞ ".xof nworb kciuq ehT"

reverse('Edabit is really helpful!') // ➞ "!lufpleh yllaer si tibadE"
