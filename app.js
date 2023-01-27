// This is the value of the kelvin temperature
const kelvin = 293;

// Celsius is 273 less than kelvin
const celsius = kelvin - 273;

// This is the formula for calculating fahrenheit
const fahrenheit = celsius * (9/5) + 32;

// This converts fahrenheit to a whole number
const roundFahrenheit = Math.floor(fahrenheit);

// This is the formula for Newton
const newton = celsius * (33/100);

const roundNewton = Math.floor(newton);

console.log(`The temperature is ${roundNewton} degrees in Newton`)
console.log(`The temperature is ${roundFahrenheit} degrees in Fahrenheit`);
