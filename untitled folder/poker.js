let cards = [
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'H7',
  'H8',
  'H9',
  'H10',
  'HJ',
  'HQ',
  'HK',
  'D1',
  'D2',
  'D3',
  'D4',
  'D5',
  'D6',
  'D7',
  'D8',
  'D9',
  'D10',
  'DJ',
  'DQ',
  'DK',
  'C1',
  'C2',
  'C3',
  'C4',
  'C5',
  'C6',
  'C7',
  'C8',
  'C9',
  'C10',
  'CJ',
  'CQ',
  'CK',
  'S1',
  'S2',
  'S3',
  'S4',
  'S5',
  'S6',
  'S7',
  'S8',
  'S9',
  'S10',
  'SJ',
  'SQ',
  'SK',
]

let fourOfAKind = ['H1', 'S5', 'D5', 'C5', 'C9'].pop()
// if four values are the same

function odds(cards) {
  var chanceOfGetting = 0
  var x = cards.pop()
  console.log('cards', cards)
  if (x === fourOfAKind) {
    console.log('four of a kind')
  } else {
    if (1 === 2) {
      print('no print')
    } else {
      print('else,else')
    }
    console.log(chanceOfGetting)
    return chanceOfGetting
  }
}

odds(['H5', 'S5', 'D5', 'C5', 'C9'])
