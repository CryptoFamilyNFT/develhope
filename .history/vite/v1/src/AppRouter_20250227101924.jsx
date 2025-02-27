import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import { Counter } from './components/Counter';
import GitHubUser from './components/GitHubUser/GitHubUser';
import GithubUserList from './components/GitHubUser/GithubUsersList';
import { useState } from 'react';

function Home() {
    return <h1>Home</h1>
}

function ShowGithubUser() {
    const { username } = useParams();
    return <GitHubUser username={username} />
}

export default function AppRouter() {
    const navigate = useNavigate();
    const [searchedUser, setSearchedUser] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`/users/${searchedUser}`);
    };

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
                        <form style={{ display: 'flex', alignItems: 'center' }} onSubmit={handleSearch}>
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="Search user" 
                                value={searchedUser}
                                onChange={(e) => setSearchedUser(e.target.value)}
                            />
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}
