import React from "react";

export default function RenderState() {
    const [count, setCount] = React.useState(0);
    const renderCount = React.useRef(0);
    const renderCount2 = React.useRef(0);

    renderCount.current++;

    React.useEffect(() => {
        console.log("Rendered");
        renderCount2.current++;
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <p>{renderCount.current}</p>
            <p>{renderCount2.current}</p>
            <button onClick={() => setCount(count + 1)}>Incrementa</button>
        </div>
    );
}