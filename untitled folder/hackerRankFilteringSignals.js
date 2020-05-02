//* The function is expected to return an INTEGER.
//* The function accepts following parameters:
//*  1. INTEGER_ARRAY frequencies
//*  2. 2D_INTEGER_ARRAY filterRanges

function countSignals(frequencies, filterRanges) {
  var signalCount = 0
  // get range of first arr, compare 2 2nd and 3rd, if in all add to newarr
  // check if frequencies in newarr
  // if so signal count + 1

  console.log('signalCount', signalCount)
  return signalCount
}

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
