/* eslint-disable no-unused-vars */
import React from "react";

export const Counter = () => {
    const [counter, setCounter] = React.useState(0);


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        </div>
    );
}