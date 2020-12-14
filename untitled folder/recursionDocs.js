// var count = 0

// function recurse(x) {
//   if (x > 0) {
//     ++count
//     // console.log('count', count);
//     recurse(x - 1)
//   }
//   console.log('Output:', count)
//   return count
// }

// recurse(10)



// COUNTDOWN RECURSION

function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
      countDown(nextNumber);
  }
}

countDown(3);
