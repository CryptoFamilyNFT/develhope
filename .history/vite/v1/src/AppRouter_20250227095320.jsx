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
