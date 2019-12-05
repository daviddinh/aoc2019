var validPasswords = []

for (i = 231832; i <= 767346; i++) {
  // Two Adjacent digits are the same
  if (!hasAdjacentIdenticalDigits(i)) continue
  // i.e 231833
  // going from left to right, the digits never decrease
  if (!alwaysSameOrIncreasing(i)) continue
  // 233333 to 699999
  validPasswords.push(i)
}

function hasAdjacentIdenticalDigits(number) {
  numberArray = String(number).split("")
  return !!numberArray.filter((e, i) => numberArray.indexOf(e) == i - 1).length
}

function alwaysSameOrIncreasing(number) {
  numberArray = Array.from(number.toString()).map(Number)
  return (
    numberArray.filter((e, i) => {
      if (i == 0) return true
      if (e >= numberArray[i - 1]) return true
    }).length == numberArray.length
  )
}
console.log(validPasswords.length)