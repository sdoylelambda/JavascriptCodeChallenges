// Reverse the Odd Length Words
// Given a string, reverse all the words which have odd length. The even length words are not changed.
// There is exactly one space between each word and no punctuation is used.

// PLAN
// PUT EACH WORD INTO ARRAY
// CHECK WORD LENGTH
// IF ODD REVERSE IT

function reverseOdd(str) {
  const outputArr = []
  // const output = ''
  const arr = str.split(' ')
  console.log('arr', arr)
  // for each word in str
  for (var i = 0; i < arr.length; i++) {
    const word = arr[i]
    const wordLength = word.length
    console.log('word:', word.length)
    // if it is odd
    if (wordLength % 2 === 0) {
      outputArr.push(word)
    } else {
      // reverse it
    }
  }

  var output = outputArr.join()

  console.log('output:', output)
  return output
}

// Examples
// reverseOdd('Bananas') /// ➞ "sananaB"

reverseOdd('One two three four') // ➞ "enO owt eerht four"

// reverseOdd('Make sure uoy only esrever sdrow of ddo length')
// ➞ "Make sure you only reverse words of odd length"
