import React from "react";
import { styles as focusStyle } from "./FocusableInputStyle";

export default function FocusableInput() {
    const [count, setCount] = React.useState(0)
    const renderCount = React.useRef(0)

    //renderCount.current++;

    React.useEffect(() => {
        console.log("Rendered");
        renderCount.current++;
    }, [count]);

    return (
        <div style={focusStyle.container}>
            <h1>
                Count: {count}
            </h1>
            <h2>
                Render Count: {renderCount.current}
            </h2>
            <div>
                <button onClick={() => setCount((prevCount) => prevCount + 1)}>Click me</button>
            </div>
        </div>
    )
}