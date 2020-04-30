// Date Format
// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.
// Notes
// Return value should be a string.

function formatDate(date) {
  const answer = date.split('/').reverse().join('')
  console.log('answer', answer)
  return answer
}

// ALTERNATE SOLUTIONS

// function formatDate(date) {
//   const mm = date.charAt(0) + date.charAt(1)
//   console.log('mm', mm)
//   const dd = date.charAt(3) + date.charAt(4)
//   console.log('dd', dd)
//   const yyyy = date.charAt(6) + date.charAt(7) + date.charAt(8) + date.charAt(9)
//   console.log('yyyy', yyyy)
//   const answer = yyyy + dd + mm
//   console.log('answer', answer)
//   return answer
// }

// function formatDate(date) {
//   const [month, day, year] = date.split('/')
//   const answer = `${year}${day}${month}`
//   console.log('answer', answer)
//   return answer
// }

// Examples
formatDate('11/12/2019') // ➞ "20191211"

formatDate('12/31/2019') // ➞ "20193112"

formatDate('01/15/2019') // ➞ "20191501"
