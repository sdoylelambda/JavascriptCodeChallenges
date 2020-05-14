// calendar
// UPER
// U - Understand
// Take 2 arrays that contain times and outer bounds
// compare to find times that are available in both arrays within outer bounds
// return array with times meetings could take place
// data is valid and ordered

// P - Plan
// python - range?
// go thru first arr,
// compare arr[1] to arr[0] of next sub array
// add difference to new array
// do same for 2nd array
// if they both fit
// add to output

function availableTimes(arr1, arr2) {
  const outPutArr = []
  const availArr1 = []
  const availArr2 = []

  const x = arr1[0][0][1]
  // get arr x
  var counter = 0
  for (var i = 0; i < arr1.length; i++) {
    console.log('i', arr1[i])
    var firstTime = arr1[i][counter][1]
    console.log('firstTime', firstTime)
    counter += 1
  }
  const regX = /:/g
  const y = arr2[0][1][0]
  console.log('x', x)
  console.log('y', y)

  const numTime1 = x.replace(regX, '')
  // console.log(numTime1)
  const numTime2 = y.replace(regX, '')
  // console.log(numTime2)
  const timeAvailable = numTime2 - numTime1
  // console.log(timeAvailable)
  const tAString = timeAvailable.toString()
  console.log(tAString)
  // console.log(tAString.replace(/(.{1})(?!$)/g, '$1:'))
  console.log(tAString.match(/.{1,2}/g).join(':'))
  const outputArr = []
  return outputArr
}

availableTimes(
  [
    [
      ['9:00', '10:30'],
      ['12:00', '13:00'],
      ['16:00', '18.00'],
    ],
    ['9:00', '20:00'], // Outer Bounds
  ],
  [
    [
      ['10:00', '11:30'],
      ['12:30', '14:30'],
      ['14:30', '15:00'],
      ['16:00', '17:00'],
    ],
    ['10:00', '18:30'], // Outer Bounds
  ]
)
