// Shuffle the Name
// Create a function that accepts a string (of a person's first and last name) and
// returns a string with the first and last name swapped.

function nameShuffle(str) {
  console.log(str.split(' ').reverse())
  const arrWord = []
  arrWord[str.split(' ')]
  console.log(arrWord)
  const x = str.split(' ').reverse().join(' ')
  console.log(x)
  return x
}

// Examples
nameShuffle('Donald Trump') // ➞ "Trump Donald"

nameShuffle("Rosie O'Donnell") // ➞ "O'Donnell Rosie"

nameShuffle('Seymour Butts') // ➞ "Butts Seymour"
