// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa!
// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th)
// and false otherwise. Keep in mind JavaScript's Date month is 0 based,
// meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(date) {
  // console.log('date', date)
  const month = date.getMonth()
  console.log('month', month)
  const d = date.getDate()
  console.log('day', d)
  if (month === 11 && d === 24) {
    console.log('Christmas')
    return true
  } else {
    console.log('not')
    return false
  }
}

timeForMilkAndCookies(new Date(2013, 11, 24)) //➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) //➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) //➞ true
