// Calculate the Profit
// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product.
// You are given an object containing the cost price per unit (in dollars),
// sell price per unit (in dollars),
// and the starting inventory.
// Return the total profit made, rounded to the nearest dollar. Assume all of the inventory has been sold.

function profit(info) {
  // determine profit per unit
  // console.log(info.costPrice)
  const profit = info.sellPrice - info.costPrice
  // console.log(profit)
  const answer = profit * info.inventory
  // times number of units
  console.log(Number(answer.toFixed(0)))
  return Number(answer.toFixed(0))
}

// Examples
profit({
  costPrice: 32.67,
  sellPrice: 45.0,
  inventory: 1200,
}) // ➞ 14796

profit({
  costPrice: 225.89,
  sellPrice: 550.0,
  inventory: 100,
}) // ➞ 32411

profit({
  costPrice: 2.77,
  sellPrice: 7.95,
  inventory: 8500,
}) // ➞ 44030
