const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")
const userInput = document.getElementById("user-input")
const enterBtn = document.getElementById("enter-btn")

// listen for user input
userInput.addEventListener("input", function() {
    const userInputValue = Number(userInput.value)

    // calculations 
    const mConverted = (userInputValue / 3.281).toFixed(3) // in feet
    const ftConverted = (userInputValue * 3.281).toFixed(3) // in meters
    const lConverted = (userInputValue / 3.785).toFixed(3) // in gallons
    const galConverted = (userInputValue * 3.785).toFixed(3) // in litres
    const kgConverted = (userInputValue * 2.205).toFixed(3) // in pounds
    const lbsConverted = (userInputValue / 2.205).toFixed(3) // in kilograms

    
    // if input is zero
    if (Number(userInput.value) === 0) {
        lengthOutput.textContent = `${userInputValue} meters = 0 feet | ${userInputValue} feet = 0 meters`
        volumeOutput.textContent = `${userInputValue} litres = 0 gallons | ${userInputValue} gallons = 0 litres`
        massOutput.textContent = `${userInputValue} kilograms = 0 pounds | ${userInputValue} pounds = 0 kilograms`
    } else { // if input is non-zero
        lengthOutput.textContent = `${userInputValue} meters = ${ftConverted} feet | ${userInputValue} feet = ${mConverted} meters`
        volumeOutput.textContent = `${userInputValue} litres = ${lConverted} gallons | ${userInputValue} gallons = ${galConverted} litres`
        massOutput.textContent = `${userInputValue} kilograms = ${kgConverted} pounds | ${userInputValue} pounds = ${lbsConverted} kilograms`
    }
})
