// Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values .

function objectToArray(obj) {
  const outputArr = []
  for (let [key, value] of Object.entries(obj)) {
    console.log(`"${key}", ${value}`)
    const x = [${key}, ${value}]
    outputArr.push(x)
  }
  console.log('output', outputArr)
  return outputArr
}
// const outputArr = []

// var key = 'key' // change this
// var value = 'value' // this too
// outputArr.push([key, value])

// console.log('outputArr', outputArr)
// return outputArr

// Examples
objectToArray({
  D: 1,
  B: 2,
  C: 3,
}) // ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10,
}) //  ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

// const object1 = {
//   a: 'somestring',
//   b: 42,
// }

// for (let [key, value] of Object.entries(object1)) {
//   console.log(`"${key}", ${value}`)
// }
