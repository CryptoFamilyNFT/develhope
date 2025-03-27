// Change the Country interface so the population property is optional
// This will fix the type error for countryB.

interface Country {
    name: string;
    code: string;
    population?: number;
}

const countryA: Country = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

const countryB: Country = {
    name: "Italy",
    code: "IT"
};

const countryC: Country = {
    name: "Spain",
    code: "ES",
    population: 47_450_795,
};
// Change the Currency type alias so the name property cannot be changed.
// This will cause a type error. Remove the code that now has a type error.

type Currency = {
    readonly name: string;
    code: string;
    symbol: string;
};

const currencyData: Currency = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};

//currencyData.name = "Gold"; // type error name readnonly

currencyData.code = "GGG";
// ----
