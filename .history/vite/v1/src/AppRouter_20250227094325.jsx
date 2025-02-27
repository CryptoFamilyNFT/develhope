import  {BrowserRouter, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';

export default function AppRouter() {

    return (
        <div>
            <BrowserRouter>
                <Route path="/chat" component={Chat} />
            </BrowserRouter>
        </div>
    );
}