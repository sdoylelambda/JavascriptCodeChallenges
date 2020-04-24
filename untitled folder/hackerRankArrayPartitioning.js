// Array Partitioning

// Given Array
// check if possible to partion into subsequences of
// length k each
// each element in array occurs exactly 1 subsequence
// all numbers in subsequence are distinct
// elements in the array having same value must be
// in different subsequences

// if possible to partition array satisfying all conditions above
// return 'yes', else return 'no'

// ex:
// n = 4 numbers in array
// length of each subsequence needs to be
// k = 2
// arr = [1,2,3,4]
// one possible way
// choose first 2 elements of array ==> [1,2] as first subsequence
// next 2 elements of array => [3,4] next subsequence
// so output === 'yes'

// ex2:
// n = 4
// k = 3
// arr = [1,2,2,3]
// no way to partition array where each subsequence is length of 3
// and each element in array occurs only once
// so output === 'no'

function partitionArray(k, numbers) {
  console.log('k:', k)
  console.log('numbers', numbers)
  const arrLen = numbers.length
  console.log('arrLen', arrLen)
  var arr1 = []
  var arr2 = []
  // if arr can by evenly divided k times proceed
  if (arrLen % k) {
    // make k different arrays... if k = 2 arr1, arr2, if k = 3..
    // arr(numbers) into each array no duplicates
    numbers.forEach((num) => {
      // if (numbers does not contain num add it)
    })
  } else {
    // else return 'no'
    return 'No'
  }
}

// Input:
// 2 - number of partitions
// 4 - length of array
// 3 - array[0]
// 5 - array[1]
// 3 - array[2]
// 2 - array[3]

// k = 2
// numbers = [ 3, 5, 3, 2 ]
partitionArray(2, [3, 5, 3, 2]) // output 'Yes'
