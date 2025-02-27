import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import { Counter } from './components/Counter';
import GitHubUser from './components/GitHubUser/GitHubUser';
import GithubUserList from './components/GitHubUser/GithubUsersList';
import { useState } from 'react';
import useGithubUser from './components/hooks/useGithubUser';

function WrappedExample() {
    const { data, error, isLoading } = useGithubUser();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error</div>
    return <div>
        {data.map((user, index) => (
            <GitHubUser key={index} username={user.login} />
        ))}
    </div>
}

function Home() {
    return <h1>Home</h1>
}

function ShowGithubUser() {
    const { username } = useParams();
    return <GitHubUser username={username} />
}

export default function AppRouter() {
    const [searchedUser, setSearchedUser] = useState('');
    return (
        <div style={{
            width: '100%',
            height: '100vh',
        }}>
            <BrowserRouter>
                <nav>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px',
                        backgroundColor: 'lightblue',
                    }}>
                        <Link to="/">Home</Link>
                        <Link to="/chat">Chat</Link>
                        <Link to="/count">Counter</Link>
                        <Link to="/users">GitHub Users</Link>
                        <Link to={`/users/:${searchedUser}`}>GitHub User</Link>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            setSearchedUser(e.target.value
                            );
                        }} style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="text" placeholder="Search user" />
                            <button type="submit">Search User</button>
                        </form>
                    </div>
                </nav>
                <Routes>
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/count" element={<Counter />} />
                    <Route path="/users/:username" element={<ShowGithubUser />} />
                    <Route path="/users" element={<GithubUserList />} />
                    <Route path="/swr" element={<WrappedExample />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
