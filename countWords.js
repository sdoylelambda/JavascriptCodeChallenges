const str = 'Just an example, here' // output 4

function countWords(str) {
  count = str.split(' ')
  console.log(count)
  c = count.length
  console.log(c)
  return c
}

countWords(str)
