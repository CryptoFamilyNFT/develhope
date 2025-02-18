import { createRoot } from "react-dom/client";
import App from "./App";
import {RenderState} from "./components/RenderState";
import { PreviousState } from "./components/RenderState";
import NotificationApp from "./NotificationApp";
const root = createRoot(document.getElementById("root"));

root.render(<App />);

