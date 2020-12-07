// Length of a Nested Array

// The .length property on an array will return the number of elements in the array.
// For example, the array below contains 2 elements:

// [1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array.
// In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// UPER
// U - UNDERSTAND
// RETURN TOTAL NUMBER OF VALUES IN arr

// P - PLAN
// LOOP THRU CHECK FOR VALUES,
// ADD TO COUNT FOR EACH VALUE
// RETURN TOTAL COUNT

// (EDGE CASES)
// WHAT IF NESTED ARRAYS ARE IN DIFFERENT ORDER? (NESTED FIRST, NON NESTED, NESTED ETC)

// E - EXECUTE
// Write a function that returns the total number of non-nested items in a nested array.
function getLength(arr) {
  var arrCount = 0

  console.log('OUTPUT::: arrCount = ', arrCount)
  return arrCount
}

// Examples
getLength([1, [2, 3]]) // ➞ 3

getLength([1, [2, [3, 4]]]) // ➞ 4

getLength([1, [2, [3, [4, [5, 6]]]]]) // ➞ 6

getLength([1, [2], 1, [2], 1]) // ➞ 5
// Notes
// An empty array should return 0.
