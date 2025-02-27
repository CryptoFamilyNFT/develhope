import { createRoot } from "react-dom/client";
//import App from "./App";
import './index.css';
import LanguageProvider from "./helper/LanguageProvider";
//import App from "./App";
import AppRouter from "./AppRouter";

const root = createRoot(document.getElementById("root"));

root.render(
    <LanguageProvider>
        <AppRouter/>
    </LanguageProvider>
);

