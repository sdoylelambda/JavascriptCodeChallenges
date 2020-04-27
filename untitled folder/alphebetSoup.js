// Alphabet Soup
// Create a function that takes a string and returns a string with its letters in alphabetical order.
// Notes
// You can assume numbers and punctuation symbols won't be included in test cases.
// You'll only have to deal with single word, alphabetic characters.

// function AlphabetSoup(str) {
//   var arr = str.split('')
//   var tmp
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       /* if ASCII code greater then swap the elements position*/
//       if (arr[i] > arr[j]) {
//         tmp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = tmp
//       }
//     }
//   }
//   console.log("arr.join('')", arr.join(''))
//   return arr.join('')
// }

// // Examples
// AlphabetSoup('hello') // ➞ "ehllo"

// AlphabetSoup('edabit') // ➞ "abdeit"

// AlphabetSoup('hacker') // ➞ "acehkr"

// AlphabetSoup('geek') // ➞ "eegk"

// AlphabetSoup('javascript') // ➞ "aacijprstv"

// function sortString(str){
//   var arr = str.split('');
//   var tmp;
//   for(var i = 0; i < arr.length; i++){
//     for(var j = i + 1; j < arr.length; j++){
//       /* if ASCII code greater then swap the elements position*/
//       if(arr[i] > arr[j]){
//         tmp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = tmp;
//       }
//     }
//   }
//   return arr.join('');
// }

function AlphabetSoup(str) {
  var arr = str.split('')
  var temp
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; i < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log("arr.join('')", arr.join(''))
  return arr.join('')
}

// Examples
AlphabetSoup('hello') // ➞ "ehllo"

AlphabetSoup('edabit') // ➞ "abdeit"

AlphabetSoup('hacker') // ➞ "acehkr"
