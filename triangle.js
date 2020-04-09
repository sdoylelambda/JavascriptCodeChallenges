// You are given 2 out of 3 angles in a triangle, in degrees.

// Write a function that classifies the missing angle as either
// "acute", "right", or "obtuse" based on its degrees.

// An acute angle is less than 90 degrees.
// A right angle is exactly 90 degrees.
// An obtuse angle is greater than 90 degrees (but less than 180 degrees).
// For example: missingAngle(11, 20) should return "obtuse",
// since the missing angle would be 149 degrees, which makes it obtuse.

// function missingAngle(angle1, angle2) {
// if (angle1 === 45) {
//   return 'right'
// } else if (angle2 === 45) {
//   return 'right'
// } else if (angle1 + angle2 <= 90) return 'obtuse'
// else {
//   return 'acute'
// }
// import Math
// Math.pow(4, 3);

function missingAngle(angle1, angle2) {
  // An acute angle is less than 90 degrees.
  acute1sqr = Math.pow(angle1, 2)
  console.log('a2', acute1sqr)
  acute2sqr = Math.pow(angle2, 2)
  console.log('b2', acute2sqr)
  csqr = acute1sqr + acute2sqr
  console.log('c2', csqr)
  acute = Math.sqrt(csqr)
  console.log('acute', acute)
  // A right angle is exactly 90 degrees.
  // An obtuse angle is greater than 90 degrees (but less than 180 degrees).
}

// console.log('obt', missingAngle(27, 59)) //➞ "obtuse"

// console.log('acute', missingAngle(135, 11)) //➞ "acute"

// console.log('right', missingAngle(45, 45)) //➞ "right"

console.log(missingAngle(45, 15), 'obtuse')

// console.log(missingAngle(35, 55), 'right')
