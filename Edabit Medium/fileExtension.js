// Get the File Extension
// Write a function that maps files to their extension names.

// return arr
// arr includes string everything after the period

function getExtension(arr) {
  const output = []
  for (var i = 0; i < arr.length; i++) {
    const item = arr[i]
    console.log(item)
    const regEx = /[^.]+$/
    const tag = item.match(regEx)
    console.log('tag:', tag[0])
    output.push(tag[0])
  }

  console.log('output:', output)
  return output
}

// Examples
getExtension(['code.html', 'code.css'])
// ➞ ["html", "css"]

// getExtension(['project1.jpg', 'project1.pdf', 'project1.mp3'])
// // ➞ ["jpg", "pdf", "mp3"]

// getExtension(['ruby.rb', 'cplusplus.cpp', 'python.py', 'javascript.js'])
// ➞ ["rb", "cpp", "py", "js"]
