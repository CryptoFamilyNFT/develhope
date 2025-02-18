import React from "react";

export function RenderState() {
    const [count, setCount] = React.useState(0);
    const renderCount = React.useRef(0);
    const renderCount2 = React.useRef(0);

    renderCount.current++;

    React.useEffect(() => {
        console.log("Rendered");
        renderCount2.current++;
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <p>{renderCount.current}</p>
            <p>{renderCount2.current}</p>
            <button onClick={() => setCount(count + 1)}>Incrementa</button>
        </div>
    );
}

export function PreviousState() {
    const [count, setCount] = React.useState(0);
    const prevCount = React.useRef(count);

    React.useEffect(() => {
        prevCount.current = count;
    }, [count]);

    return (
        <div>
            <h1>Conteggio: {count}</h1>
            <h2>Ref - precedente: {prevCount.current}</h2>
            <h3>Diff: {count - prevCount.current}</h3>
            <button onClick={() => setCount(count + 1)}>Incrementa</button>
        </div>
    );
}