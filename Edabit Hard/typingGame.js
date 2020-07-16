// Typing Game
// You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and
// the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and
// -1s (incorrectly-typed words).

// Inputs:
// User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

// Output: [1, 1, -1, -1, 1]

// ES6 sentax
const correctStream = (users, correct) =>
  users.map((user, i) => (user === correct[i] ? 1 : -1))

// function correctStream(user, correct) {
//   const outputArr = []
//   for (var i = 0; i < user.length; i++) {
//     var userWord = user[i]
//     var correctWord = correct[i]
//     if (userWord === correctWord) {
//       outputArr.push(1)
//     } else {
//       outputArr.push(-1)
//     }
//   }

//   console.log('output:', outputArr)
//   return outputArr
// }

// Examples
correctStream(['it', 'is', 'find'], ['it', 'is', 'fine']) // ➞ [1, 1, -1]

correctStream(
  ['april', 'showrs', 'bring', 'may', 'flowers'],
  ['april', 'showers', 'bring', 'may', 'flowers']
) // ➞ [1, -1, 1, 1, 1]
