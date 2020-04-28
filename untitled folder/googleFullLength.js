// The Full Length of a Google
// Google's logo can be stretched depending on how many pages it lets you skip forward to.

// Let's say we wanted to change the amount of pages that Google could skip to.

// Create a function where given a number of pages n,
// return the word 'Google' but with the correct number of "o"s.
// Notes
// If n is equal to or less than 1, return invalid.

function googlify(n) {
  // n = number
  // return 'Google' with number of o's = 0's
  if (n <= 1) {
    console.log('invalid')
    return 'invalid'
  } else {
    var nn = 'o'
    // console.log('n', n)
    var oooos = nn.repeat(n)
    // console.log('ooos', oooos)
    var str = 'G' + oooos + 'gle'
    console.log('str', str)
    return str
  }
}

// Examples
googlify(10) // ➞ "Goooooooooogle"

googlify(23) // ➞ "Gooooooooooooooooooooooooogle"

googlify(2) // ➞ "Google"

googlify(-2) // ➞ "invalid"
