import React from "react";

export default function RenderState() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {

    }, []);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementa</button>
        </div>
    );
}