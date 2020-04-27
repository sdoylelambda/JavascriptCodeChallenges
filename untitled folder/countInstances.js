// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and
// returns the number of times the first string (the single character) is found in the second string.
// Notes
// Your output must be case-sensitive (see second example).

// check and see how many letters

// If the order of alerts matters, use this:

// for (var i = 0; i < str.length; i++) {
//   alert(str.charAt(i));
// }
// If the order of alerts doesn't matter, use this:

// var i = str.length
// while (i--) {
//   alert(str.charAt(i))
// }

// function charCount(myChar, str) {
//   var count = 0
//   // for each myChar in str, count += 1
//   for (var i = 0; i < str.length; i++) {
//     console.log(str.charAt(i))
//     if (str.charAt(i) === myChar) {
//       count += 1
//     }
//   }
//   console.log('count:', count)
//   return count
// }

function charCount(myChar, str) {
  var count = 0
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === myChar) {
      count += 1
    }
  }
  console.log('finalCount', count)
  return count
}

// Examples
charCount('a', 'edabit') // ➞ 1

charCount('c', 'Chamber of secrets') // ➞ 1

charCount('b', 'big fat bubble') // ➞ 4
