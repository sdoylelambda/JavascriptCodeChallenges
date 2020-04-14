const nums = [1, 2, 3, 4, 5]

function multNums(nums) {
  return nums.map((num) => num * 2)
}

console.log(multNums(nums))

function multNums2(nums) {
  const x = nums.map((num) => {
    return num * 2
  })
  return x
}

console.log(multNums2(nums))

const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map((sweetItem) => {
  return sweetItem * 2
})

console.log(sweeterArray) // [4, 6, 8, 10, 70]
