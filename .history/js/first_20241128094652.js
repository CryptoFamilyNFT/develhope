const isSunnyDay = true;
const isAutumn = false;
const itIsRaining = false;
const isSummer = true;

console.log(isSunnyDay && isSummer); // true - perchè c'è il sole e siamo in estate
console.log(!itIsRaining || isSunnyDay); // true - perchè non piove o perchè c'è il sole
console.log(!isAutumn && isSummer); // true - perchè non è autunno e siamo in estate

console.log(isAutumn && itIsRaining); // false - perchè non è autunno e non piove
console.log(!isSunnyDay || itIsRaining); // false - perchè c'è il sole (isSunnyDay === true)
console.log(isAutumn || !isSummer); // false - perchè non è autunno ed è estate