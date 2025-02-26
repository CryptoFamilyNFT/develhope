/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function useDataFetch() {

    return;
}

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((r) => r.json())
            .then((data) => {
                setData(data)
            })
            .catch((e) => {
                console.log(e)
                setError(e)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url]);

    return {data, loading, error};
}