// Reverse and Capitalize
// Create a function that takes a string of lowercase characters and
// returns that string reversed and in upper case.

function reverseCapitalize(str) {
  // console.log(str.toUpperCase())
  const strUpperCase = str.toUpperCase()
  // 3 steps to reverse
  // 1: add letters individually to array
  const arr = []
  for (var i = 0; i < strUpperCase.length; i++) {
    // console.log(str.charAt(i))
    const chars = strUpperCase.charAt(i)
    arr.push(chars)
  }
  // console.log(arr)
  // 2: reverse array order
  const reverseArr = arr.reverse()
  console.log(reverseArr)
  // 3: join array back to string
  const reverseStr = reverseArr.join('')
  console.log(reverseStr)
  return reverseStr
}

// Examples
reverseCapitalize('abc') // ➞ "CBA"

reverseCapitalize('hellothere') // ➞ "EREHTOLLEH"

reverseCapitalize('input') // ➞ "TUPNI"
