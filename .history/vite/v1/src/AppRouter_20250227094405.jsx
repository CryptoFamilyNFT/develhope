import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat/Chat';

export default function AppRouter() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/chat" component={<Chat/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}