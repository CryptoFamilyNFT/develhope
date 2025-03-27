// Updated code with the required changes:

interface Country {
    name: string;
    code: string;
    languages: string[];
    currency?: string;
    population: number;
}

// Change the PartialCountry type to use the Partial utility type.
type PartialCountry = Partial<Country>;

const countryA: PartialCountry = {
    code: "CN",
    population: 1_412_600_000,
};

// Change the CompleteCountry type to use the Required utility type.
type CompleteCountry = Required<Country>;

const countryB: CompleteCountry = {
    name: "Greece",
    code: "GR",
    languages: ["Greek"],
    population: 10_678_632,
    currency: "Euro", // Added the missing property to fix the type error.
};

// Change the ReadonlyCountry type to use the Readonly utility type.
type ReadonlyCountry = Readonly<Country>;

const countryC: ReadonlyCountry = {
    name: "Italy",
    code: "IT",
    languages: ["Italian"],
    population: 60_317_116,
};
// Removed the incorrect code that attempted to modify a readonly property.
// countryC.population = 60_317_117;

console.log(countryC);

// Change the CountryWithPopulation type to use the Pick utility type.
type CountryWithPopulation = Pick<Country, "name" | "code" | "population">;

const countryD: CountryWithPopulation = {
    name: "New Zealand",
    code: "NZ",
    population: 5_135_300,
};

// Change the CountryWithoutPopulation type to use the Omit utility type.
type CountryWithoutPopulation = Omit<Country, "population">;

const countryE: CountryWithoutPopulation = {
    name: "Thailand",
    code: "TH",
    languages: ["Thai", "Isan", "Kam Mueang", "Pak Tai", "Malay"],
    currency: "Baht",
};

// ----

export {};
