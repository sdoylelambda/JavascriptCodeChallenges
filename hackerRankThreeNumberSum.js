// * Complete the 'threeNumberSum' function below.
// *
// * The function is expected to return a 2D_INTEGER_ARRAY.
// * The function accepts following parameters:
// *  1. INTEGER_ARRAY arr
// *  2. INTEGER target -- DO 3 NUMBERS ADD UP TO THIS
// */

// UPER
// GO THRU ARRAY
// FIND 3 NUMBERS THAT ADD UP TO TARGET
// PUT THEM IN OUTPUT ARRAY
// SORT THEM HOW THEY WANT THEM
// RETURN ARRAY

// BETTER WAY THAN 3 NESTED LOOPS?

// MAKE SURE INPUT IS CORRECT, MAY NEED TO SUBTRACT FOR HACKER RANKS TESTS

function threeNumberSum(arr, target) {
  const outputArr = []
  // PLAN NESTED 3 LAYER FOR LOOP OF ARR
  for (var i = 0; i < arr.length; i++) {
    var firstLoopNum = arr[i]
    // console.log('firstLoopNum', firstLoopNum)
    for (var x = 0; x < arr.length; x++) {
      var secondLoopNum = arr[x]
      // console.log('secondLoopNum', secondLoopNum)
      for (var y = 0; y < arr.length; y++) {
        var thirdLoopNum = arr[y]
        // console.log('thirdLoopNum', thirdLoopNum)
        if (firstLoopNum + secondLoopNum + thirdLoopNum === target) {
          // for (var t = 0; t < outputArr.length; t++) {
          // } if() {
          outputArr.push([firstLoopNum, secondLoopNum, thirdLoopNum])

          // }
          //   }
        }
      }
    }
    console.log('outputArr', outputArr)
    // get rid of duplicates
    return output
    // COMPARE EACH ITEM WITH EACH OTHER 3
    // IF THEY ADD UP TO TARGET
    // PUSH THEM TO OUTPUT ARRAY
    // VERIFY ORDER - MAYBE JUST ASCENDING
  }
}
// Test Cases
threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0) // => [[-8, 2, 6],[-8,3,5],-6,1,5]]

// threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30) // => [[6,9,15],[7,8,15]]

// threeNumberSum()

var array = [1, 2, 3, 4, 5]

// Getting sum of numbers
var sum = array.reduce(function (a, b) {
  return a + b
}, 0)

console.log(sum) // Prints: 15
