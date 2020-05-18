// Applying Discounts --- Reg Ex
// Create a function that applies a discount d to every number in the array.
// The discount is the percentage of the original price
// (i.e the discount of "75%" to 12 would be 9 as opposed to taking off 75% (making 3)).
// There won't be any awkward decimal numbers, only 0.5 to deal with.

function getDiscounts(nums, d) {
  const discountArr = []
  // For each item in array
  for (var i = 0; i < nums.length; i++) {
    // remove d percent
    const num = nums[i]
    // Get numbers from d string ex: '50%' = 50
    const regEx = /\d+/g
    // const discount = 0.75 // change string to num
    const discount = d.match(regEx) * 0.01
    console.log('discount', discount)
    const discountNum = num * discount
    console.log('discountNum', discountNum)
    discountArr.push(discountNum)
  }
  console.log('discountArr', discountArr)
  return discountArr
}

// Examples
getDiscounts([2, 4, 6, 11], '50%') // ➞ [1, 2, 3, 5.5]         == * .5

getDiscounts([10, 20, 40, 80], '75%') // ➞ [7.5, 15, 30, 60]  == * .75

getDiscounts([100], '45%') // ➞ [45]                          == * .45
