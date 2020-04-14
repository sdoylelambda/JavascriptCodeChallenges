// add 'ly' to each word in arr

const arr = [['clever', 'meek', 'hurried', 'nice']]
const ending = 'ly'

function addEnding(arr, ending) {
  return arr.map((a) => {
    // console.log('a', a)
    a.concat(ending)
  })
}

console.log('1:', addEnding(arr, ending))

function addEnding2(arr, ending) {
  return arr.map((word) => word + ending)
}
console.log('2:', addEnding2(arr, ending))

function addEnding3(arr, ending) {
  return arr.map((s) => s.concat(ending))
}

console.log('3:', addEnding3(arr, ending))

function addEnding4(arr, ending) {
  x = arr.map((word) => `${word}${ending}`)
  console.log('x', x)
  return x
}
console.log('4:', addEnding3(arr, ending))
