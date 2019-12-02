const readline = require("readline")
const fs = require("fs")

const readInterface = readline.createInterface({
  input: fs.createReadStream("./1a-input.txt"),
  output: process.stdout,
  console: false,
})

let totalFuelRequired = 0
let fuelCalculator = mass => Math.floor(mass / 3.0) - 2

readInterface.on("line", function(line) {
  totalFuelRequired += fuelCalculator(parseInt(line))
  console.log('Total = ', totalFuelRequired);
})
