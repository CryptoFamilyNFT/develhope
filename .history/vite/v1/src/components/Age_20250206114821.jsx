/* eslint-disable react/prop-types */
export const Age = ({ children }) => {
    if (typeof children !== "number") {
        return <p>Invalid Age!</p>;
    }
    return <p>Your Age is {children}! </p>;
}