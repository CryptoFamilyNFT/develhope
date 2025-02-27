/* eslint-disable react/prop-types */
import { useState } from "react";

export default function useGithubUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUser = async (username) => {
        if (!username) return;

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
    };

    return { user, loading, error, fetchUser };
}
