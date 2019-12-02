const readline = require("readline")
const fs = require("fs")

const readInterface = readline.createInterface({
  input: fs.createReadStream("./1b-input.txt"),
  output: process.stdout,
  console: false,
})

let totalFuelRequired = 0
let fuelCalculator = mass => Math.floor(mass / 3.0) - 2
let fuelRecursor = initialMass => {
  totalFuel = 0
  currentMass = initialMass
  while (fuelCalculator(currentMass) > 0){
    currentMass = fuelCalculator(currentMass)
    totalFuel += currentMass
  }
  return totalFuel
}

readInterface.on("line", function(line) {
  totalFuelRequired += fuelRecursor(parseInt(line))
  console.log("Total = ", totalFuelRequired)
})
