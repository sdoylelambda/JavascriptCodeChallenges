// Return the Objects Keys and Values
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.


function keysAndValues(obj) {
	const outputArr = []
	const keys = Object.keys(obj)
	outputArr.push(keys)
  const values = Object.values(obj)
	outputArr.push(values)
	console.log('keys', keys)
//	console.log('values', values)
	return outputArr
}


// function keysAndValues(obj) {
//   var k = [];
//   var o = [];
//   for (var i in obj){
//     k.push(i);
//     o.push(obj[i]);
//   }
//   return [k,o];
// }


// function keysAndValues(obj) {
//   var keys = Object.keys(obj);
//   return [keys, keys.map( key => obj[key] )];
// }


// Examples
keysAndValues({ a: 1, b: 2, c: 3 })
//➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
//➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
//➞ [["key1", "key2", "key3"], [true, false, undefined]]

