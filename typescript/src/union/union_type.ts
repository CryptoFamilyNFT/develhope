// Change the Currency type into a union type that works for both variables.
type Currency = string | boolean;

let indianCurrency: Currency = "Indian rupee";

let narniaCurrency: Currency = false;

// Change the type for the `data` function parameter so it can accept  
// the different types of data that are passed when it's being called.  
function outputCountryData(country: string, data: number | string) {
    console.log(`The data for ${country} is: ${data}`);
}

outputCountryData("Italy", 60_317_116);

outputCountryData("Nigeria", "Naira");

outputCountryData("United States of America", "English");

outputCountryData("India", 1_352_642_280);

export {};
