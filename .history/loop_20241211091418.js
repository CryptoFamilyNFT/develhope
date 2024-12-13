const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let firstValue = numbers.slice(0,1);
let arrayLength = numbers.length
let lastValue = numbers.slice(arrayLength-1, arrayLength);
let indexOutOfRange = numbers.indexOf(20); // ritornerna -1 poichè non esiste elemento in quel index
console.log(firstValue, arrayLength, lastValue, indexOutOfRange); // 