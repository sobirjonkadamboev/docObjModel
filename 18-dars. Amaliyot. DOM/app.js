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

//forecast today is 293 kelvin
const kelvin = 293
//subtracted to find celcius
const celsius = kelvin - 273
//finding fahrenheit
//using math.floor
let fahrenheit = Math.floor(celsius * (9 / 5) + 32)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
