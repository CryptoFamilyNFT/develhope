import { useEffect, useState } from "react";

export default function GithubUserList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => {
                setError(error);
            })
            .finally(() => setIsLoading(false));
    }, [])

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <h1>{user.login}</h1>
                    <img src={user.avatar_url} alt={user.login} />
                </div>
            ))}
        </div>
    )
}