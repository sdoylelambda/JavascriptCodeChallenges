// Capture the Rook
// Write a function that returns true if two rooks can attack each other, and false otherwise.
// Notes
// Assume no blocking pieces.
// Two rooks can attack each other if they share the same row (letter) or column (number).

function canCapture([yourRook, opponentsRook]) {
  var x = yourRook.charAt(1)
  var y = opponentsRook.charAt(1)
  var b = yourRook.charAt(0)
  var a = opponentsRook.charAt(0)
  console.log('x', x)
  if (x === y || a === b) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

// Examples
canCapture(['A8', 'E8']) // ➞ true

canCapture(['A1', 'B2']) // ➞ false

canCapture(['H4', 'H3']) // ➞ true

canCapture(['F5', 'C8']) // ➞ false
