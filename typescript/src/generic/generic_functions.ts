
// Make this identity function generic.
// This should fix the type errors on Line 13 and 15.
// Hint: The type for the value function parameter should use a type variable.

function identity<T>(value: T): T {
    return value;
}

let value1 = identity<string>("France");

let value2 = identity<number>(67_413_000);
// ----

async function fetchData<Type>(url: string) {
    const response = await fetch(url);
    const responseBody = await response.json();

    return responseBody as Type;
}

interface User {
    name: string;
}
// Pass the User type as a type argument to the generic fetchData() function.
// This should fix the type error on Line 35.

let user: Promise<User> = fetchData("http://api.com/user/1");

console.log(user);
// ----

export { };