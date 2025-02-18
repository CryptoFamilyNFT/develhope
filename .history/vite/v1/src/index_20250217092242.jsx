import { createRoot } from "react-dom/client";
import App from "./App";
import RenderState from "./components/RenderState";

const root = createRoot(document.getElementById("root"));

root.render(<RenderState />);
