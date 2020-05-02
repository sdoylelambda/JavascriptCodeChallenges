// * The function is expected to return an INTEGER_ARRAY.
// * The function accepts 2D_INTEGER_ARRAY queries as parameter.

function frequencyQueries(queries) {
  var outputArr = []
  var collection = []
  // look at queries[0] for each sub array
  queries.forEach((quer) => {
    // console.log(quer)
    // add queries[1] to collection
    if (quer[0] === 1) {
      // console.log('add', quer[1])
      collection.push(quer[1])
      // console.log('add collection', collection)
    }
    if (quer[0] === 2) {
      // console.log('delete', quer[1])
      // delete queries[1] 1 time from collection
      // for each item in collectionArr
      for (var i = 0; i < collection.length; i++) {
        // if queries[1] is in output arr
        if (quer[1] === collection[i]) {
          // delete it (pop)
          const index = collection.indexOf(quer[1])
          if (index > -1) {
            collection.splice(index, 1)
          }

          // collection.splice(collection[i])
          console.log('collection slice', collection)
          break
        }
      }
    }
    console.log('b4 outputArr', outputArr)
    if (quer[0] === 3) {
      // console.log('output if:::3:', quer[0])
      for (var i = 0; i < collection.length; i++) {
        // check if queries[1] is in collection
        console.log('quer[1]', quer[1])
        console.log('collection[1]', collection[i])
        if (quer[1] === collection[i]) {
          // if so add 1 to outputArr
          console.log('outputArr IF:', collection)
          console.log('xxxx', collection[i])
          outputArr.push(1)
        } else {
          // else add 0 to outputArr
          console.log('output add 0')
          outputArr.push(0)
          console.log('outputArr ELSE:', outputArr)
        }
      }
    }
  })
  console.log('collection output:', collection)
  console.log('outputArr output:', outputArr)
  return outputArr
}

frequencyQueries([
  [1, 1],
  [3, 3],
  [2, 2],
  [3, -1],
  [1, 1],
  [1, 1],
  [2, 1],
  [1, 2],
  [3, 2],
]) // return [0,0,1]

// Operation   Collection   Output   Rationale
// [1,1]       [1]                   Add a 1 to the collection
// [3,3]       [1]           0       Check for an element with frequency 3; no such element
// [2,2]       [1]                   Remove a 2 from the collection; no such element to remove
// [3,-1]      [1]           0       Check for an element with frequency -1; no such element
// [1,1]       [1,1]                 Add a 1 to the collection
// [1,1]       [1,1,1]               Add a 1 to the collection
// [2,1]       [1,1]                 Remove a 1 from the collection
// [1,2]       [1,1,2]               Add a 2 to the collection; occurrences of 2 is now 1
// [3,2]       [1,1,2]       1       Check for an element with frequency 2; 1 satisfies this

// [1, x] => insert x into collection
// [2, y] => delete 1 y from collection
// [3, z] => check for z => output 1 if so, 0 if not
