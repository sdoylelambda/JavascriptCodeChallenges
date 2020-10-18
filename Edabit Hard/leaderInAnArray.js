// Leader in an Array

// UPER
// U - UNDERSTAND
// Create a function that finds each number in the given array that is greater than every number that comes after it.
// Your solution should return an array of the number(s) that meet these criteria.
// Add elements in the new array in the same order they occur in the input array.

// P - PLAN
// FIND LARGEST NUMBER IN ARRAY
// SEE IF NUMBER TO THE RIGHT IS THE 2ND LARGEST
// IF SO ADD IT
// THEN THE NUMBER TO THE RIGHT
// IF THATS THE 3RD LARGEST ADD IT
// SO ON

// IDEAS
// WHILE LOOP

// E - EXECUTE
// function leader(arr) {
//   const outputArr = []
//   var largestNumber = Math.max(...arr)
//   console.log('largestNumber', largestNumber)
//   const largestNumberPosition = arr.indexOf(Math.max(...arr))
//   const secondlargestNumberPosition = arr[largestNumberPosition + 1]
//   console.log('secondlargestNumberPosition', secondlargestNumberPosition)
//   // FIND LARGEST NUMBER IN ARRAY
//   while (arr.length > 0) {
//     outputArr.push(largestNumber)
//     arr.pop(largestNumber)
//     secondlargestNumberPosition = arr[largestNumberPosition + 1]
//     largestNumber = Math.max(...arr)
//   if (secondlargestNumberPosition != largestNumber ) {
//     console.log('if')
//     }
//   }
//   console.log('outputArr', outputArr)
//   return outputArr
// }

function leader(arr) {
  const outputArr = []
  var largestNumber = Math.max(...arr)
  console.log('largestNumber', largestNumber)
  var largestNumberPosition = arr.indexOf(Math.max(...arr))
  console.log('largestNumberPosition', largestNumberPosition)
  outputArr.push(largestNumber)
  arr.splice(largestNumberPosition, 1)
  var secondlargestNumber = Math.max(...arr)
  console.log('secondlargestNumber', secondlargestNumber)
  var secondlargestNumberPosition = arr.indexOf(Math.max(...arr))
  console.log('secondlargestNumberPosition', secondlargestNumberPosition + 1)
  console.log('output = 15', arr)
// NOW THAT LARGEST NUM IS IN ARRAY
while (arr.length > 1) {
// IF 2ND LARGEST NUM IS NEXT IT IT ADD IT
  if (largestNumberPosition === secondlargestNumberPosition) {
    var largestNumber = Math.max(...arr)
    // console.log('largestNumber', largestNumber)
    var largestNumberPosition = arr.indexOf(Math.max(...arr))
    // console.log('largestNumberPosition', largestNumberPosition)
    outputArr.push(secondlargestNumber)

    arr.splice(largestNumberPosition, 1)
   
    
    var secondlargestNumber = Math.max(...arr)
    // console.log('secondlargestNumber', secondlargestNumber)
    var secondlargestNumberPosition = arr.indexOf(Math.max(...arr))
    // console.log('secondlargestNumberPosition', secondlargestNumberPosition)
    console.log('if outputArr', outputArr)
    console.log('arr', arr)
  } else {
    var largestNumber = Math.max(...arr)
    // console.log('largestNumber', largestNumber)
    var largestNumberPosition = arr.indexOf(Math.max(...arr))
    arr.splice(largestNumberPosition, 1)
    // console.log('largestNumberPosition', largestNumberPosition)
    var secondlargestNumber = Math.max(...arr)
    // console.log('secondlargestNumber', secondlargestNumber)
    var secondlargestNumberPosition = arr.indexOf(Math.max(...arr))
    // console.log('secondlargestNumberPosition', secondlargestNumberPosition)
    console.log('else outputArr', outputArr)
    console.log('arr', arr)
  }
}
  
  console.log('outputArr', outputArr)
  return outputArr
}

// Examples
leader([2, 3, 20, 15, 8, 3]) //➞ [20, 15, 8, 3]








// Note that 20 is greater than all the elements to it's
// right side, similarly 15 and so on.

// leader([2, 3, 20, 15, 8, 25, 3]) //➞ [25, 3]
// Note that 20 cannot be added because it is not greater than 25.

// leader([1, 2, 3, 4, 5]) //➞ [5]
// 5 is technically greater than the (zero) remaining items.

// leader([8, 7, 1, 2, 10, 3, 5]) //➞[10, 5]
// 10 is greater than all items to the right of it, so include.
// 3 is not greater than all items to the right of it, so exclude.
// 5 is greater than the remaining items, so include.
