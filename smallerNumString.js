function smallerNum(n1, n2) {
  a = parseInt(n1)
  console.log('a', a)
  b = parseInt(n2)
  console.log('b', b)
  if (a < b) {
    c = a.toString()
    console.log('c', c)
    return c
  } else if (a >= b) {
    d = b.toString()
    console.log('d', d)
    return d
  }
}

// console.log(smallerNum('21', '44')) //➞ "21"

console.log(smallerNum('1500', '1')) //➞ "1"

// console.log(smallerNum('5', '5')) //➞ "5"
