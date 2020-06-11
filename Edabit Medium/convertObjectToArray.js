// Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values .

function objectToArray(obj) {
  const outputArr = []

  var key = 'key' // change this
  var value = 'value' // this too
  outputArr.push([key, value])

  console.log('outputArr', outputArr)
  return outputArr
}

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
