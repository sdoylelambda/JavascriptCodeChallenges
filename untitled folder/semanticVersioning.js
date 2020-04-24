// Semantic Versioning
// In semantic versioning a piece of software can be represented in a format like this

// example: 6.1.9.

// The first number is the major version.
// The second number is the minor version.
// The third number is the patch (bug fixes).
// Write three separate functions, one to retrieve each element in the semantic versioning specification.

function retrieveMajor(semver) {
  // sember = 6      =>} .1.9.  (string)
  // get first char from string and return it
  // charAt() method, at index 0,
  var first = semver.charAt(0)
  console.log(first)
  return first
}

function retrieveMinor(semver) {
  // sember = .1.      =>} 6.9
  var second = semver.charAt(2)
  console.log(second)
  return second
}

function retrievePatch(semver) {
  var third = semver.charAt(4)
  console.log(third)
  return third
}

// Examples
// 6.1.9
retrieveMajor('6.1.9') // ➞ "6"

retrieveMinor('6.1.9') // ➞ "1"

retrievePatch('6.1.9') // ➞ "9"

// 2.1.0
retrieveMajor('2.1.0') // ➞ "2"

retrieveMinor('2.1.0') // ➞ "1"

retrievePatch('2.1.0') // ➞ "0"
