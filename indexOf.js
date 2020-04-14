function middleEarth(arr) {
  const frodo = arr.indexOf('Frodo')
  // console.log(frodo)
  const sam = arr.indexOf('Sam')
  // console.log(sam)
  if (frodo - sam === -1 || sam - frodo === -1) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

middleEarth(['Frodo', 'Sam', 'Gandalf']) //➞ true

middleEarth(['Frodo', 'Saruman', 'Sam']) //➞ false

middleEarth(['Orc', 'Sam', 'Frodo', 'Legolas']) //➞ true

// SIMPLE indexOf EXAMPLE:

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

// console.log(beasts.indexOf('bison'))
// // expected output: 1

// // start from index 2
// console.log(beasts.indexOf('bison', 2))
// // expected output: 4

// console.log(beasts.indexOf('giraffe'))
// // expected output: -1
