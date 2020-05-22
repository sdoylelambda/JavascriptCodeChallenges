// Rock, Paper, Scissors
// Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2)
// as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

// Each argument will contain a single string: "Rock", "Paper", or "Scissors".
// Return the winner according to the following rules:

// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock
// If p1 wins, return the string "The winner is p1".
// If p2 wins, return the string "The winner is p2"
// and if p1 and p2 are the same, return "It's a draw".

function rps(p1, p2) {
  if (p1 === p2) {
    console.log('Draw')
    return "It's a draw"
  } else {
    if (p1 === 'Rock' && p2 === 'Paper') {
      console.log('"The winner is p2"')
      return 'The winner is p2'
    }
    if (p1 === 'Paper' && p2 === 'Rock') {
      console.log('"The winner is p1"')
      return 'The winner is p1'
    }
    if (p1 === 'Scissors' && p2 === 'Rock') {
      console.log('"The winner is p2"')
      return 'The winner is p2'
    }
    if (p1 === 'Rock' && p2 === 'Scissors') {
      console.log('"The winner is p1"')
      return 'The winner is p1'
    }
    if (p1 === 'Paper' && p2 === 'Scissors') {
      console.log('"The winner is p2"')
      return 'The winner is p2'
    }
    if (p1 === 'Scissors' && p2 === 'Paper') {
      console.log('"The winner is p1"')
      return 'The winner is p1'
    }
  }
}

// Examples
rps('Rock', 'Paper') // ➞ "The winner is p2"

rps('Scissors', 'Paper') // ➞ "The winner is p1"

// rps("Paper", "Paper") // ➞ "It's a draw"
