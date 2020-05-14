// How Much is True?
// Create a function which returns the number of true values there are in an array.
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

function countTrue(arr) {
  var count = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count += 1
    }
  }
  console.log(count)
  return count
}

// OTHER SOLUTIONS:

// const countTrue = (arr) => arr.filter(Boolean).length;

// function countTrue(arr) {
// 	let total = 0;
// 	arr.map(x => x === true ? total += 1 : x);
// 	return total;
// }

// Examples
countTrue([true, false, false, true, false]) // ➞ 2

countTrue([false, false, false, false]) // ➞ 0

countTrue([]) // ➞ 0
