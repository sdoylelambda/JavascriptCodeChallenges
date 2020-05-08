//* The function is expected to return an INTEGER.
//* The function accepts following parameters:
//*  1. INTEGER_ARRAY frequencies
//*  2. 2D_INTEGER_ARRAY filterRanges

function countSignals(frequencies, filterRanges) {
  var signalCount = 0
  var filterArr = []
  var outputArr = []
  var maxRange = 10000
  var minRange = -110
  // get range of first arr, compare 2 2nd and 3rd, if in all add to newarr
  // check if frequencies in newarr
  // if so signal count + 1
  for (var i = 0; i < filterRanges.length; i++) {
    var x = filterRanges[i]
    console.log('x', x)
    var z = Math.max(...x)
    if (z <= maxRange) {
      maxRange = z
    }
  }
  console.log('maxRange', maxRange)
  for (var i = 0; i < filterRanges.length; i++) {
    var x = filterRanges[i]
    console.log('x', x)
    var z = Math.min(...x)
    if (z >= minRange) {
      minRange = z
    }
  }
  console.log('minRange', minRange)
  // if nums in array are larger than or equal to minRange and
  for (var i = 0; i < frequencies.length; i++) {
    console.log('i', frequencies[i])
    var frequency = frequencies[i]
    if (frequency >= minRange && frequency <= maxRange) {
      outputArr.push(frequency)
    }
  }
  console.log('outputArr', outputArr)
  return outputArr
  // smaller than or equal to maxRange add to outputArr
}
// console.log('filterRanges', filterRanges)
// return signalCount

countSignals(
  [8, 15, 14, 16, 21],
  [
    [10, 17],
    [13, 15],
    [13, 17],
  ]
) // returns 2 (number of freq. that pass thru)(15, 14)

// frequencies = [8, 15, 14, 16, 21]
// fileterRanges = [
//   [10, 17],
//   [13, 15],
//   [13, 17],
// ]
// return 2 (15, 14)
