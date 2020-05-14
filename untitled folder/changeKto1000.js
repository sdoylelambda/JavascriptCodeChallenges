// Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers.
// Each k represents a thousand.
// Return the upvotes as an array.

// function transformUpvotes(str) {
// 	return str.split(' ').map(element => element.endsWith('k') ? parseFloat(element)*1000 : parseFloat(element));
// }

// function transformUpvotes(str) {
//   return str
//     .split(' ')
//     .map((a) => (a.endsWith('k') ? parseFloat(a) * 1000 : parseInt(a)))
// }

// const transformUpvotes = s => s.split(" ").map(x =>
//   +(x.replace(".", "").replace("k", "00")));

//   function transformUpvotes(str) {
//     var a = str.split(/\s+/);
//     return a.map(function(el) {
//       if (el.match(/([\d.]+)k$/)) {
//         return RegExp.$1*1000;
//       }
//       return el|0;
//     });
//   }

// function transformUpvotes(str) {
//   const outputArr = []
//   const ends = str.endsWith('k')
//   console.log('ends', ends)
//   if (ends) {
//     // remove .
//     const removeDot = str.length - 3
//     console.log(removeDot)
//     const str1 = str.slice(0, removeDot) + str.slice(removeDot - 2)
//     console.log('str1', str1)
//     // outputArr.push(removeDot)
//     // console.log('ifends,')

//     const zerosAdded = str1.replace(/k/g, '00')
//     console.log('zerosAdded', zerosAdded)
//     // turn k into 00
//     // const removeDot = zerosAdded.replace('.', '')
//     // console.log('removeDot', removeDot)
//     outputArr.push(zerosAdded)
//     console.log('ifends,')
//   } else {
//     console.log('else')
//     // outputArr.push(str)
//   }
//   console.log('output:::', outputArr)
//   return outputArr
// }
// // var str = 'Hello World'
// // const strlen = str.length - 3
// // console.log(strlen)
// // str = str.slice(0, strlen) + str.slice(strlen + 2)
// // console.log(str)

// Examples
// console.log(transformUpvotes('6.8k 13.5k')) // ➞ [6800, 13500]

// transformUpvotes('5.5k 8.9k 32') // ➞ [5500, 8900, 32]

// transformUpvotes('20.3k 3.8k 7.7k 992') // ➞ [20300, 3800, 7700, 992]

// parseFloat
// var x = '5.447'
// var y = parseFloat(x)
// console.log(y)

const str = '5.5k 8.9k 32'

// .split() method makes arr by spaces between chars
var x = str.split(' ') //.map((e) => console.log(e))
// console.log('x', x)
x.map((e) => {
  //console.log(e))
  if (e.endsWith('k')) {
    console.log('parseFloat(e) * 1000:::', parseFloat(e) * 1000)
    return parseFloat(e) * 1000
  } else {
    console.log('parseFloat(e):::', parseFloat(e))
    return parseFloat(e)
  }
})
// var x = str
//   .split(' ')
//   .map((e) => {
//     console.log('e', e)
//      (e.endsWith('k') ? parseFloat(e) * 1000 : parseFloat(e))
//   }
// console.log('x', x)
