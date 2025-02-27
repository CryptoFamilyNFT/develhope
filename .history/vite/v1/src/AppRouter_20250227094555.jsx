import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat/Chat';

function Home () {
    return <h1>Home</h1>
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}
