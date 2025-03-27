//The objects in the countries array use strings as the values of the currency properties.
//Complete this numeric enum so that it can be used instead of strings.
//Hint: Use the string values in the currency properties as the enum members.

enum Currency {
    Euro = "Euro",
    Dollar = "Dollar",
}

// Update the type for the `currency` property in this interface to use the `Currency` enum.

interface Country {
    name: string;
    currency: Currency;
}

// Replace the string values for the `currency` properties below with

const countries: Country[] = [
    {
        name: "France",
        currency: Currency.Euro,
    },
    {
        name: "United States of America",
        currency: Currency.Dollar,
    },
    {
        name: "Italy",
        currency: Currency.Euro,
    },
    {
        name: "New Zealand",
        currency: Currency.Dollar,
    },
];

// Create a string enum named `LanguageStatus`. Use it to replace the
// string values for the `status` properties in the objects below.

enum LanguageStatus {
    Primary = "primary",
    Secondary = "secondary",
}

const countryLanguages = [
    { language: "Spanish", status: LanguageStatus.Primary },
    { language: "English", status: LanguageStatus.Secondary },
];

export {};