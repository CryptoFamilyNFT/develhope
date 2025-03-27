
// Add a type annotation for this array.
// Use the array literal type syntax: type[]
// Hint: Look at the type that TypeScript has inferred.

const currencies1: string[] = ["NZD", "THB", "NGN"];

// Add a type annotation for this array.
// Use the generic interface type Array: Array

const currencies2: any[] = ["EUR", "COP", "INR"];

// Add a type annotation for this array.
// Use the array literal type syntax: type[]

const populations1: number[] = [50_372_424, 1_352_642_280, 211_400_708];

// Add a type annotation for this array.
// Use the generic interface type Array: Array

const populations2: any[] = [5_135_300, 331_893_745, 1_412_600_000];

// ----

// You will use this interface to describe the shape of the objects in the arrays below. Change the types for the properties in this interface so they are correct.

interface Country {
    name: string;
    code: string;
    population: number;
}
// Add a type annotation for this array of objects.
// Use the array literal type syntax: Type[]
// Hint: Make use of the Country type.

const countries1: Country[] =[
    {
        name: "China",
        code: "CN",
        population: 1_412_600_000,
    },
    {
        name: "Italy",
        code: "IT",
        population: 60_317_116,
    },
];
// Add a type annotation for this array of objects.
// Use the generic interface type Array: Array
// Hint: Make use of the Country type.

const countries2: Country[] = [
    {
        name: "Thailand",
        code: "TH",
        population: 69_950_850,
    },
    {
        name: "Greece",
        code: "GR",
        population: 10_678_632,
    },
];
// ----

export {};