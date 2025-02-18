/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export const Counter = () => {
    const [counter, setCounter] = React.useState(0);


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
        }}>
            <button onClick={() => setCounter(prevCount => prevCount + 1)}>Click Me</button>
            <CounterDisplay>
                {counter}
            </CounterDisplay>
        </div>
    );
}

const CounterDisplay = ({ children }) => {
    return (
        <div style={{ fontSize: '24px', color: children % 2 === 0 ? 'blue' : 'red' }}>
            {children}
        </div>
    )
}