// Tower of Hanoi
// There are three towers. The objective of the game is to move all the disks over to tower #3,
// but you can't place a larger disk onto a smaller disk. To play the game or learn more about
// the Tower of Hanoi, check the Resources tab.

// Tower of Hanoi

// Create a function that takes a number discs as an argument and returns the minimum amount of
// steps needed to complete the game.

// function towerHanoi(discs) {
//   var count = 0
//   var tower1 = []
//   var tower2 = []
//   var tower3 = []
//   // add 3 disks to tower1 (1,2,3)
//   for (var i = 1; i <= discs; i++) {
//     tower1.push(i)
//   }
//   console.log('tower1,', tower1)
//   var reverseTower1 = tower1.reverse()
//   // move smallest first to tower2
//   var x = reversetower1[reversetower1.length]
//   reversetower2.push(x)
//   reverseTower1.pop()
//   // next smallest tower 3
//   var y = reversetower1[reversetow1.length]
//   reversetower3.push(y)
//   reverseTower1.pop()
//   // when tower 3 is reverse of tower1 print count
// }

// function towerHanoi(discs) {
//   var count = 0
//   var tower1 = []
//   var tower2 = []
//   var tower3 = []

//   // add 3 disks to tower1 (1,2,3)
//   for (var i = 1; i <= discs; i++) {
//     tower1.push(i)
//   }
//   console.log('tower1,', tower1)

//   // while (tower3.length < discs - 1) {
//   var reverseTower1 = tower1.reverse()
//   console.log('reverseTower1,', reverseTower1)
//   var reverseTower2 = tower2.reverse()
//   var reverseTower3 = tower3.reverse()

//   for (var x = 0; x < reverseTower1.length; x++) {
//     var disc = reverseTower1[x]
//     console.log('disc:', disc)
//     if (
//       reverseTower2[reverseTower2.length] == null ||
//       reverseTower2[reverseTower2.length] > disc
//     ) {
//       console.log('move disc')
//       tower2.push(disc)
//     } else {
//       tower3.push(disc)
//     }
//   }
//   console.log('tower1', tower1)
//   console.log('tower2', tower2)
//   console.log('tower3', tower3)
//   console.log('count', count)
//   return count
// }
// }

// function towerHanoi(discs) {
//   var count = 0
//   var tower1 = []
//   var tower2 = []
//   var tower3 = []

//   // add 3 disks to tower1 (1,2,3)
//   for (var i = 1; i <= discs; i++) {
//     tower1.push(i)
//   }
//   console.log('tower1,', tower1)

//   // while (tower3.length < discs - 1) {

//   for (var x = 0; x < tower1.length; x++) {
//     var disc = tower1[x]
//     console.log('disc:', disc)
//     var p = tower2.length
//     var q = tower2[p]
//     console.log('q', q)
//     if (tower2[tower2.length] == null || tower2[tower2.length] > disc) {
//       console.log('move disc')
//       tower2.push(disc)
//     } else {
//       tower3.push(disc)
//     }
//   }
//   console.log('tower1', tower1)
//   console.log('tower2', tower2)
//   console.log('tower3', tower3)
//   console.log('count', count)
//   return count
// }

var towerHanoi = function (discs) {
  let moves = 0
  ;(function play(discs) {
    if (discs > 0) {
      play(discs - 1)
      moves++
      play(discs - 1)
    }
  })(discs)

  return moves
}

function towerHanoi2(discs) {
  var numberOfMoves = 0
  function move(discs) {
    if (discs > 0) {
      move(discs - 1)
      console.log('d1', discs)
      numberOfMoves += 1
      move(discs - 1)
      console.log('d2', discs)
    }
  }
  move(discs)
  console.log('numberOfMoves:', numberOfMoves)
  return numberOfMoves
}

// Examples
console.log(towerHanoi2(3)) // ➞ 7
// start - tower1 = [1,2,3]
// move x- tower1 = [2,3] tower2 = [1]
// move x- tower1 = [3] tower2 = [1] tower3 = [2]
// move x- tower1 = [3] tower2 = [] tower3 = [1,2]
// move x- tower1 = [] tower2 = [3] tower3 = [1,2]
// move x- tower1 = [] tower2 = [1,3] tower3 = [2]
// move x- tower1 = [2] tower2 = [1,3] tower3 = []
// move x- tower1 = [1, 2] tower2 = [3] tower3 = []

console.log(towerHanoi(5)) // ➞ 31

console.log(towerHanoi(0)) // ➞ 0

// UNDERSTAND

// Number of Moves to get all rings to 3rd tower
// ring can not move to ring smaller than it
//
