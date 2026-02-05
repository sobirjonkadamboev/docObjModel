/* string interpolation

let myName = 'Sobirjon'
let myCity = 'Seoul'
console.log(`My name is ${myName}. My favorite city is ${myCity}`)

//typeof operator
let newVariable = 'Playing around with typeof.'
console.log(typeof newVariable)
 */

//mini project by codecademy

//forecast today is 293 kelvin
const kelvin = 293
//subtracted to find celcius
const celsius = kelvin - 273
//finding fahrenheit
//using math.floor
let fahrenheit = Math.floor(celsius * (9 / 5) + 32)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

//second project by codecademy
//created a variable with my age
let myAge = 19
//another variable
let earlyYears = 2
earlyYears *= 10.5
//next variable
let laterYears = myAge - 2
//number of dog years by later years
laterYears *= 4
console.log(earlyYears)
console.log(laterYears)
