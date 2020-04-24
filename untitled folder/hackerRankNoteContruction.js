// Note Construction

//  *  return a BOOLEAN.
//  *  parameters:
//  *  1. STRING_ARRAY magazine
//  *  2. STRING_ARRAY note
// caps matters

function constructNote(magazine, note) {
  var count = 0
  console.log('magazine', magazine)
  console.log('note', note)
  // if magazine contains note
  note.forEach((word) => {
    console.log('word:', word)
    magazine.forEach((mag) => {
      console.log('mag:', mag)
      if (word === mag) {
        count += 1
      }
    })
  })
  if (count === note.length) {
    // if(){
    //   // return true
    console.log('True')
    return true
  } else {
    console.log('False')
    return false
  }
}

// sample input:
// 6
// give
// me
// one
// grand
// today
// night
// 4
// give
// one
// grand
// today

// functions sees
// [ 'give', 'me', 'one', 'grand', 'today', 'night' ]
// [ 'give', 'one', 'grand', 'today' ]

// constructNote(
//   ['give', 'me', 'one', 'grand', 'today', 'night'],
//   ['give', 'one', 'grand', 'today']
// )

constructNote([ 'apgo',
'clm',
'w',
'lxkvg',
'mwz',
'elo',
'bg',
'elo',
'lxkvg',
'elo',
'apgo',
'apgo',
'w',
'elo',
'bg' ],

)