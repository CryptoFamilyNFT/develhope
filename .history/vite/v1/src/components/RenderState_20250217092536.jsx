import React from "react";

export default function RenderState() {
    const [count, setCount] = React.useState(0);
    const renderCount = React.useRef(0);

    renderCount.current++;

    React.useEffect(() => {

    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <p>{renderCount.current}</p>
            <button onClick={() => setCount(count + 1)}>Incrementa</button>
        </div>
    );
}