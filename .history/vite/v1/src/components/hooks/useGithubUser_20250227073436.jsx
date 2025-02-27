/* eslint-disable react/prop-types */
import { useState } from "react";

export default function useGithubUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    async function fetchUser(username) {
        setLoading(true);
        setError(null);

        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error on response');
                }
                return response.json();
            })
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }


    return { user, loading, error, fetchUser };
}