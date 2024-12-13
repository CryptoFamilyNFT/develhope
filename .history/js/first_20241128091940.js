const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted
yearsCompleted === firstYearCompleted

console.log(yearsCompleted == firstYearCompleted); // true - perchè il doppio uguale non controlla il tipo ma solo il valore
console.log(yearsCompleted === firstYearCompleted); // false - perchè il triplo uguale controlla anche il tipo oltre al valore
