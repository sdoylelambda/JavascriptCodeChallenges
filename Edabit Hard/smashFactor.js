// Smash Factor
// Smash factor is a term in golf that relates to the amount of energy transferred from the
// club head to the golf ball. The formula for calculating smash factor is
// ball speed divided by club speed.

// Create a function that takes ball speed bs and club speed cs as arguments and
// returns the smash factor to the nearest hundredth.

function smashFactor(bs, cs) {
  var x = bs / cs
  var y = x.toFixed(2)
  var i = parseFloat(y)
  console.log(i)
  return i
}

// Examples
smashFactor(139.4, 93.8) // ➞ 1.49

smashFactor(181.2, 124.5) // ➞ 1.46

smashFactor(154.7, 104.3) // ➞ 1.48
// Notes
// Remember to round to the nearest hundredth.
