// make banking app
// if checking accts eremainingBalanceceeds balance remove from savings or credit card

// data set
// const dataSet = {
//   name: 'smith',
//   account: 'savings:5000,checking:1000,credit:2000',
// }

// const data = dataSet.account

// const regEremainingBalance1 = /:(.*)/g
// console.log(data.match(regEremainingBalance1))
// let remainingBalance = data.match(regEremainingBalance1)
// console.log('remainingBalance', remainingBalance)
// const regEremainingBalance2 = /,(.*)/
// console.log(remainingBalance.match(regEremainingBalance2))

const dataSet = {
  name: 'smith',
  savings: 5000,
  checking: 1000,
  credit: 2000,
}

const name = dataSet.name
var savings = dataSet.savings
console.log('savings', savings)
var checking = dataSet.checking
var credit = dataSet.credit
var checkingSavings = checking + savings
var checkingSavingsCredit = checking + savings + credit
console.log('checkingSavings', checking + savings)

function spend(dollars) {
  if (checking >= dollars) {
    checking -= dollars
    console.log('checking:', checking)
  } else if (checkingSavings >= dollars) {
    var remainingBalance = checkingSavings - dollars
    // console.log('remainingBalance', remainingBalance)
    checking = 0
    savings = (Math.round(remainingBalance * 100) / 100).toFixed(2)
  } else if (checkingSavingsCredit >= dollars) {
    var remainingBalance = checking + savings + credit - dollars
    // console.log('remainingBalance', remainingBalance)
    credit = 0
    checking = 0
    savings = (Math.round(remainingBalance * 100) / 100).toFixed(2)
  } else {
    console.log('transaction declined')
  }
  console.log(
    `${name} has in savings: ${savings} in checking: ${checking} in credit: ${credit}`
  )
}

spend(3000.9)
