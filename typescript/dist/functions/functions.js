"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doubleThePopulation(value) {
    return value * 2;
}
// Correct or remove the function calls which cause type errors.
doubleThePopulation(5);
doubleThePopulation(Number("612"));
doubleThePopulation(8526);
// Alter this function so the language2 parameter is optional.
// Hint: Check language2 is not undefined before passing it to console.log().
function languagesSpoken(country, language1, language2) {
    console.log(`The languages spoken in ${country} are:`);
    if (!language2) {
        console.log("lang2 not found");
        return;
    }
    console.log(language1);
    console.log(language2);
}
languagesSpoken("Colombia", "Spanish", "English");
languagesSpoken("Greece", "Greek");
languagesSpoken("New Zealand", "English", "Māori");
