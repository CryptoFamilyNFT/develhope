import { createRoot } from "react-dom/client";
//import App from "./App";
import './index.css';
import LanguageProvider from "./helper/LanguageProvider";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
    <LanguageProvider>
        <App/>
    </LanguageProvider>
);

