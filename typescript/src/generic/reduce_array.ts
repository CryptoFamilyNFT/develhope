
const populations = [
    1_412_600_000,
    60_317_116,
    69_950_850,
    10_678_632,
];
//The Array reduce method allows us to generate a single value from an array of values.
//Below we're using it to sum the values of the populations array.
//The population parameter in the callback has an inferred type of number.
//Change the initial value (false) to a value with the same type as population. This should fix the type error on Line 23.

const sumOfPopulations = populations.reduce((total, population) => {
    return total + population;
}, 0);

console.log(sumOfPopulations);

export {};