import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import { Counter } from './components/Counter';
import GitHubUser from './components/GitHubUser/GitHubUser';

function Home () {
    return <h1>Home</h1>
}

function ShowGithubUser() {
    const { username } = useParams();
    return <GitHubUser username={username} />
}

export default function AppRouter() {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
        }}>
            <nav>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px',
                    backgroundColor: 'lightblue',
                }}>
                    <a href="/">Home</a>
                    <a href="/chat">Chat</a>
                    <a href="/count">Counter</a>
                    <a href="/users/username">GitHub User</a>
                </div>
            </nav>
            <BrowserRouter>
                <Routes>
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/count" element={<Counter/>} />
                    <Route path="/users/:username" element={<ShowGithubUser />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
