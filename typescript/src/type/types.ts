
function getPopulation(): any {
    return 69_950_850;
}
// Add a type assertion after the call to getPopulation().
// Hint: What's the actual type of the value returned by getPopulation()?

const population = getPopulation() as number;

// Now you've added a type assertion, there's a type error in the code below.
// Remove the code that is incorrect.

console.log(population);

console.log(population * 2);
// ----



type Country = string;

// Create a Country type alias for the string type.
// Change the type for each variable to use the Country type.

const country1: Country = "Nigeria";

const country2: Country = "Italy";

const country3: Country = "China";
// ----

export {};