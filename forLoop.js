// not the one

const arr = [1, 2, 5]

function forLoop(arr) {
  for (a in arr) {
    console.log('a', a)
  }
}

forLoop(arr)
