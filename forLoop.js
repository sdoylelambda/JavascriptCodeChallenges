const arr = [1, 2, 5]

function forLoop(arr) {
  for (a in arr) {
    console.log('a', a)
  }
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

forLoop(arr)
