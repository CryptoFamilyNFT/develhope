import React,{ useMemo } from "react";

export default function useCustomCounter() {
    const [_count, setCount] = React.useState(0);

    const memoriedFuncs = useMemo(() => {
        const increment = () => {
            setCount(_count + 1);
        };
    
        const decrement = () => {
            setCount(_count - 1);
        };
    
        const reset = () => {
            setCount(0);
        };

        return { increment, decrement, reset };
    }, [_count]);

    return { _count, _increment: memoriedFuncs.increment, decrement: memoriedFuncs.decrement, reset: memoriedFuncs.reset };
}