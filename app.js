// This is the value of the kelvin temperature
const kelvin = 293;

// Celsius is 273 less than kelvin
const celsius = kelvin - 273;

// This is the formula for calculating fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// This converts fahrenheit to a whole number
fahrenheit = Math.floor(fahrenheit);

// This is the formula for Newton
let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees in Newton`)
console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit`);
