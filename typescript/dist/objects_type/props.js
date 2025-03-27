"use strict";
// Change the Country interface so the population property is optional
// This will fix the type error for countryB.
const countryA = {
    name: "India",
    code: "IN",
    population: 1352642280,
};
const countryB = {
    name: "Italy",
    code: "IT"
};
const countryC = {
    name: "Spain",
    code: "ES",
    population: 47450795,
};
const currencyData = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};
//currencyData.name = "Gold"; // type error name readnonly
currencyData.code = "GGG";
// ----
