// Phone Number Formatting
// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

function formatPhoneNumber(numbers) {
  var phoneNumber = []
  phoneNumber.push('(', numbers[0], numbers[1], numbers[2], ')')
  phoneNumber.push(' ', numbers[3], numbers[4], numbers[5])
  phoneNumber.push('-', numbers[6], numbers[7], numbers[8], numbers[9])
  console.log(phoneNumber.join(''))
  return phoneNumber.join('')
}

// Examples
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // ➞ "(123) 456-7890"

// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) // ➞ "(519) 555-4468"

// formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) // ➞ "(345) 501-2527"
