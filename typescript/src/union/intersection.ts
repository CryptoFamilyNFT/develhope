interface Country {
    name: string;
    code: string;
}

interface CountryStatistics {
    population: number;
}

interface CountryLanguages {
    languages: string[];
}

// Change the `CountryWithLanguages` type into an intersection type that uses the interfaces defined above.
type CountryWithLanguages = Country & CountryLanguages;

const countryA: CountryWithLanguages = {
    name: "Greece",
    code: "GR",
    languages: ["Greek"]
};

// Create an intersection type named `CountryWithStatistics` that describes the shape of the object below.
type CountryWithStatistics = Country & CountryStatistics;

// Add a type annotation with the `CountryWithStatistics` type on the variable `countryB`.
const countryB: CountryWithStatistics = {
    name: "China",
    code: "CN",
    population: 1_412_600_000
};

export {};