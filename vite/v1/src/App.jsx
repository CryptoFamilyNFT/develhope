import { Hello } from "./components";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <div>
      <Hello />
      <div>
      <Welcome name="Mario" age={30} />
      </div>
    </div>
  );
}

export default App;