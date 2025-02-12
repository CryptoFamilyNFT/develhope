/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

export const Counter2 = ({ initialValue = 0, incrementAmount = 1 }) => {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        console.log(`Current counter value: ${counter}`);
    }, [counter]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
        }}>
            <button onClick={() => setCounter(prevCount => prevCount + incrementAmount)}>Click Me</button>
            <h2>{counter}</h2>
        </div>
    );
}

export const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
        }}>
            <h2>{time}</h2>
        </div>
    );
}