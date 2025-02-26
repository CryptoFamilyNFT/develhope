/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function GitHubUser({username}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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
    }, [username]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.login}</p>
            <img src={user.avatar_url} alt={`profile`} />
        </div>
    );
}