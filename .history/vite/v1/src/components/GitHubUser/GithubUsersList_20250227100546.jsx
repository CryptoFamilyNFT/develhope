import { useEffect, useState } from "react";
import GitHubUser from "./GitHubUser";

export default function GithubUserList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [_name, setName] = useState(null);

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


    const handleUserClose = () => {
        setName(null);
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (
        <div>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '60%',
                height: '60%',
                backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
                <GitHubUser username={_name} onClose={handleUserClose} />
            </div>
            {users.map(user => (
                <div key={user.id} onClick={() => setName(user.login)}>
                    <h1>{user.login}</h1>
                    <img src={user.avatar_url} alt={user.login} />
                </div>
            ))}
        </div>
    )
}