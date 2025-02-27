import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat/Chat';

function Home () {
    return <h1>Home</h1>
}

export default function AppRouter() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/chat" component={<Chat/>} />
                    <Route path="/" component={<Home/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}