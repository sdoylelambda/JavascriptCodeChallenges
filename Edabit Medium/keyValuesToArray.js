// Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

// GOAL
// {D: 1} ==> ["D", 1]

// UNDERSTAND
// MAKE ARRAYS WITH 2 VALUES, 1ST STRING = X, 2ND NUMBER = Y
// SEPEARATE BY COMAS

// PLAN
// LOOK FOR ":"
// MAKE CHAR TO LEFT = X
// MAKE X STRING
// MAKE CHAR TO RIGHT = Y
// SEPEARATE BY COMAS

function objectToArray(obj) {
  const outputArr = []
  // SEPEARATE BY COMAS
  for (let [key, value] of Object.entries(obj)) {
    console.log('key:', key)
    console.log('value:', value)
    outputArr.push([key, value]) // string, colon?
  }
  console.log('outputarr:', outputArr)
  return outputArr
}

// Examples
objectToArray({
  D: 1,
  B: 2,
  C: 3,
}) // ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) // ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

const object1 = {
  a: 'somestring',
  b: 42,
}

for (let [key, value] of Object.entries(object1)) {
  // console.log(`${key}: ${value}`)
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed
