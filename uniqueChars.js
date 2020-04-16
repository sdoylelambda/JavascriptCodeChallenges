function filterUnique(arr) {
  let mySet = new Set()
  const x = arr.map((a) => {
    console.log(a)
    return mySet.add(a)
    console.log(mySet)
  })
  console.log(x)
  return x
}

// console.log(filterUnique(['abb', 'abc', 'abcdb', 'aea', 'bbb'])) // ➞ ["abc"]
// // "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

// console.log(filterUnique(['88', '999', '989', '9988', '9898'])) // ➞ []

// console.log(filterUnique(['ABCDE', 'DDEB', 'BED', 'CCA', 'BAC'])) // ➞ ["ABCDE", "BED", "BAC"]

// let mySet = new Set()

// mySet.add(1) // Set [ 1 ]
// console.log(mySet)
// mySet.add(5) // Set [ 1, 5 ]
// console.log(mySet)
// mySet.add(5) // Set [ 1, 5 ]
// console.log(mySet)
// mySet.add('some text') // Set [ 1, 5, 'some text' ]
// console.log(mySet)
