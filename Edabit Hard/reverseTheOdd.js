// Reverse the Odd Length Words
// Given a string, reverse all the words which have odd length. The even length words are not changed.
// There is exactly one space between each word and no punctuation is used.

// PLAN
// PUT EACH WORD INTO ARRAY
// CHECK WORD LENGTH
// IF ODD REVERSE IT

function reverseOdd(str) {
  const outputArr = []
  const arr = str.split(' ')
  for (var i = 0; i < arr.length; i++) {
    const word = arr[i]
    const wordLength = word.length
    if (wordLength % 2 === 0) {
      outputArr.push(word)
    } else {
      const reverseWord = word.split('').reverse().join('')
      outputArr.push(reverseWord)
    }
  }
  var output = outputArr.join(' ')
  console.log('output:', output)
  return output
}

// function reverseOdd(str) {
//   return str.split(" ").map(w => w.length%2 ? [...w].reverse().join("") : w).join(" ");
// }

// const reverseOdd = str => str.split(' ').map(v => v.length % 2 ? [...v].reverse().join('') : v).join(' ');

// function reverseOdd(str) {
// 	return str.split(" ").map(s => {

// 		if (s.length % 2 !== 0){
// 			console.log(s);
// 			 return reverseStr(s);
// 		}
// 		return s;
// 	}).join(" ")

// }
// function reverseStr(str){
// 	return [...str].reverse().join("");
// }

// Examples
reverseOdd('Bananas') /// ➞ "sananaB"

reverseOdd('One two three four') // ➞ "enO owt eerht four"

reverseOdd('Make sure uoy only esrever sdrow of ddo length')
// ➞ "Make sure you only reverse words of odd length"
