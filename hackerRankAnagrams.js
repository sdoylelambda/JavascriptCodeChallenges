// The function is expected to return an INTEGER.
// The function accepts following parameters:
//  1. STRING a
//  2. STRING b

// UPER
// U
// TAKE 2 STRINGS RETURN AN INT FOR HOW MANY CHARS NEED BE REMOVED
// TO MAKE ANAGRAMS

// EX: INPUTS: a = 'cde' b = 'abc'  OUTPUT = 4
// FOR THESE TO BE ANAGRAMS FOLLOWING CHARS MUST BE REMOVED: d,e,a,b
// CHARS REMOVED ADD UP TO 4, SO OUTPUT IS 4

// P
// TAKE COUNT OF a + b  EX: 6
// ADD A TO ARRAY
// ADD B TO ARRAY IF VALUES NOT IN ARRAY
// COUNT VALUES IN ARRAY
// WONT WORK

// TAKE COUNT OF a + b  EX: 6
// FOR EACH CHAR IN a
// SEE IF CHAR IS IN B
// IF SO COUNT + 2
// SUBTRACT COUNT FROM TOTAL CHARS OF A+B
// RETURN RESULT EX: 4

// function makeAnagrams(a, b) {
//   // TAKE COUNT OF a + b  EX: 6
//   const totalChars = a.length + b.length
//   console.log(totalChars)
//   // FOR EACH CHAR IN a
//   var i = a.length
//   const aArr = []
//   const bArr = []
//   while (i--) {
//     const aV = a.charAt(i)
//     console.log(aV)
//     aArr.push(aV)
//   }
//   console.log(aArr)
//   // SEE IF CHAR IS IN B
//   var z = b.length
//   while (z--) {
//     const bV = b.charAt(z)
//     console.log(bV)
//     aArr.push(bV)
//   }
//   console.log(aArr)
//   // IF SO COUNT + 2
//   let sorted_arr = aArr.slice().sort() // You can define the comparing function here.
//   // JS by default uses a crappy string compare.
//   // (we use slice to clone the array so the
//   // original array won't be modified)

//   console.log('sorted_arr', sorted_arr)
//   let results = []
//   for (let i = 0; i < sorted_arr.length - 1; i++) {
//     console.log('sortPre', sorted_arr[i + 1])
//     if (sorted_arr[i + 1] === sorted_arr[i]) {
//       console.log('sortI', sorted_arr[0])
//       results.push(sorted_arr[i])
//     }

//     console.log('results', results)
//     return results
//   }
//   // SUBTRACT COUNT FROM TOTAL CHARS OF A+B
//   // RETURN RESULT EX: 4
//   console.log(results.length())
//   return results.length()
// }

// makeAnagrams('cde', 'abc')

function makeAnagrams(a, b) {
  // TAKE COUNT OF a + b  EX: 6
  const totalChars = a.length + b.length
  console.log(totalChars)
  // FOR EACH CHAR IN a
  var i = a.length
  const aArr = []
  const bArr = []
  const outCount = 0
  var masterCount = 0
  while (i--) {
    const aV = a.charAt(i)
    console.log(aV)
    aArr.push(aV)
  }
  console.log(aArr)
  // GET CHAR FROM B
  var z = b.length
  while (z--) {
    const bV = b.charAt(z)
    console.log(bV)
    aArr.push(bV)
  }
  console.log(aArr)

  const uniq = aArr
    .map((name) => {
      return {
        count: 1,
        name: name,
      }
    })
    .reduce((a, b) => {
      a[b.name] = (a[b.name] || 0) + b.count
      console.log('b.count', b.count)
      masterCount += 1
      console.log('a', a)
      return a
    }, {})
  console.log('masterCount', masterCount)
  const duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)

  console.log('duplicates', duplicates)

  // IF SO COUNT + 2
  const dups = duplicates.length * 2
  console.log('dups', dups)
  const finalAnswer = totalChars - dups
  console.log('finalAnswer', finalAnswer)
  return dups
}

// makeAnagrams('cde', 'abc') -- passes

makeAnagrams('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke') // expected 30
