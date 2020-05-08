// Ageing the Population...
// Given an object of people and their ages, return how old the people would be after n years
// have passed. Use the absolute value of n.

// Assume that everyone is immortal (it would be a bit grim if I told you to remove names once they reached 75).
// n should be a positive number because last time I checked, people don't tend to age backwards.
// Therefore, use the
// absolute value of n.

// function afterNYears(names, n) {
//   console.log('2222', names[1])
//   var keys = Object.keys(names)
//   var dict = []
//   keys.forEach(function (key) {
//     console.log(key, names[key])
//     console.log(names[key])
//     const x = names[key]
//     console.log('dsssss', x + n)
//     const y = x + n
//     dict.push(key, y)
//     console.log('dict', dict)
//     return dict
//   })
// }

// Examples
// afterNYears(
//   {
//     Joel: 32,
//     Fred: 44,
//     Reginald: 65,
//     Susan: 33,
//     Julian: 13,
//   },
//   1
// ) // ➞ {
//   "Joel" : 33,
//   "Fred" : 45,
//   "Reginald" : 66,
//   "Susan" : 34,
//   "Julian" : 14
// }

// afterNYears(
//   {
//     Baby: 2,
//     Child: 8,
//     Teenager: 15,
//     Adult: 25,
//     Elderly: 71,
//   },
//   19
// ) // ➞ {
// //   "Baby" : 21,
// //   "Child" : 27,
// //   "Teenager" : 34,
// //   "Adult" : 44,
// //   "Elderly" : 90
// // }

// afterNYears(
//   {
//     Genie: 1000,
//     Joe: 40,
//   },
//   5
// ) // ➞ {
//   "Genie" : 1005,
//   "Joe" : 45
// }

// var input = [
//   { key: 'key1', value: 'value1' },
//   { key: 'key2', value: 'value2' },
// ]

// var result = {}

// for (var i = 0; i < input.length; i++) {
//   // console.log(input[i])
//   result[input[i].key] = input[i].value
// }

// // console.log(result) // Just for testing

// function afterNYears(names, n) {
//   var result = {}

//   for (var i = 0; i < names.length; i++) {
//     console.log(names[i])
//     result[names[i].key] = names[i].value
//   }

//   console.log(result) // Just for testing
// }

// const afterNYears = (list, n) => {
//   for (let person in list) list[person] += Math.abs(n)
//   console.log(list)
//   return list
// }

function afterNYears(names, n) {
	for (var k in names) {
		names[k] += Math.abs(n);
	}
	
	return names;
}

afterNYears(
  {
    Joel: 32,
    Fred: 44,
    Reginald: 65,
    Susan: 33,
    Julian: 13,
  },
  1
)
