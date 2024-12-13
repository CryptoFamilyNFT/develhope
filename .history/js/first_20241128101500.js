let number = 7;

if (number > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}

const isPositiveNumber = number > 0 ? "The number is positive" : "The number is negative";

console.log(isPositiveNumber);

//creare un programma che determina il prezzo di un biglietto del cinema in base all'età utente, giorno e giorno della settimana applicando degli sconti! utilizziamo switch e operatore tarnario

let isSunnyDay = true;
let isHomeworkCompleted = true;

const JessyAct = isSunnyDay && isHomeworkCompleted ? "Jesse can go out to play" : "Jessy stays at home";