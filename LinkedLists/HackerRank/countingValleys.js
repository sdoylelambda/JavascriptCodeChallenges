// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// Example

 

// The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.

// Function Description

// Complete the countingValleys function in the editor below.

// countingValleys has the following parameter(s):

// int steps: the number of steps on the hike
// string path: a string describing the path
// Returns

// int: the number of valleys traversed
// Input Format

// The first line contains an integer , the number of steps in the hike.
// The second line contains a single string , of  characters that describe the path.

// Constraints

// Sample Input

// 8
// UDDDUDUU
// Sample Output

// 1
// Explanation

// If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

// _/\      _
//    \    /
//     \/\/
// The hiker enters and leaves one valley.

// what makes a valley
// a valley is 2 or more down and 2 or more up


function countingValleys(steps, pa) {
  // console.log('steps:', steps)
  // console.log('path:', path[0])
  var path = pa
  console.log('path', path)
  var valleys = 0
  // NEEDS 2 OR MORE DOWN TO BE VALLEY 
  for (var i = 0; i < path.length; i++) {
      if(path[i] === 'D' && path[i + 1] === 'D'){ // && path[i + 2] === 'U' && path[i + 3] === 'U') {
        path.shift()  
        valleys++
      }
   
  }
  console.log('output:::', valleys)
  return valleys
}

// const steps = 8
// const path = ['U','D','D','D','U','D','U','U'] // = 1 valley

const steps = 12
const path = ['D','D','U','U','D','D','U','D','U','U','U','D'] // = 2 valleys

countingValleys(steps, path) 
