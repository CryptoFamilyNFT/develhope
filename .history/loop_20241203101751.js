let a = 5
let b = 5

let sumResult = (a, b) => a + b

console.log(sumResult(a, b))

//secondo metodo per fare il test

let sumResultSec = (c = 5, d = 5) => c + d

console.log(sumResultSec())