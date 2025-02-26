/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import GitHubUser from './GitHubUser';

const GitHubUsers = () => {
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            setUsers([...users, username]);
            setUsername('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {users.map((user, index) => (
                    <GitHubUser key={index} username={user} />
                ))}
            </ul>
        </div>
    );
};

export default GitHubUsers;