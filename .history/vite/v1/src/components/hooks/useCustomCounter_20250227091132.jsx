import React,{ useMemo } from "react";

export default function useCustomCounter() {
    const [count, setCount] = React.useState(0);

    const memoriedFuncs = useMemo(() => {
        const increment = () => {
            setCount(count + 1);
        };
    
        const decrement = () => {
            setCount(count - 1);
        };
    
        const reset = () => {
            setCount(0);
        };

        return { increment, decrement, reset };
    }, [count]);

    return { count, increment: memoriedFuncs.increment, decrement: memoriedFuncs.decrement, reset: memoriedFuncs.reset };
}