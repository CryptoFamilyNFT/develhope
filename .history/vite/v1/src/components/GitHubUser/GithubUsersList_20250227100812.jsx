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
            {_name !== null && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        color: 'black',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        position: 'relative',
                    }}>
                        <button onClick={handleUserClose} style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'none',
                            border: 'none',
                            fontSize: '16px',
                            cursor: 'pointer',
                        }}>X</button>
                        <GitHubUser username={_name} onClose={handleUserClose} />
                    </div>
                </div>
            )}
            {users.map(user => (
                <div key={user.id} onClick={() => setName(user.login)} style={{
                    cursor: 'pointer',
                    margin: '10px',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <h1 style={{ marginRight: '10px' }}>{user.login}</h1>
                    <img src={user.avatar_url} alt={user.login} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                </div>
            ))}
        </div>
    )
}