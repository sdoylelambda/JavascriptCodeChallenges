// RegEx: Boundary Assertions I
// Assume a program only reads .js or .jsx files.
// Write a function that accepts a file path and returns true if it can read the file
// and false if it can't.

// Notes
// Use a RegEx boundary assertion in your function.

function isJS(path) {
  //if path ends in jsx return true
  const regExJSX = /jsx\b/
  console.log('jsx', regExJSX)
  console.log('path.match(regExJSX)', path.match(regExJSX))
  const regExJS = /js\b/
  // if(path.ends(.jsx)){
  if (path.match(regExJSX) || path.match(regExJS)) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

// Examples
isJS('/users/user.jsx') //➞ true

isJS('/users/user.js') //➞ true

isJS('/users/user.ts') //➞ false
