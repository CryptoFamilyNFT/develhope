/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function useGithubUser(username) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;

        async function fetchUser() {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (!response.ok) {
                    throw new Error('Error on response');
                }
                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, [username]);

    return { user, loading, error };
}