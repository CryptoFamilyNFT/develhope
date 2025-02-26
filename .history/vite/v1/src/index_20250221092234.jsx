import { createRoot } from "react-dom/client";
//import App from "./App";
import './index.css';
import TodoListApp from "./components/TodoListApp";

const root = createRoot(document.getElementById("root"));

root.render(<TodoListApp />);

