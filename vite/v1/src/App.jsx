import { Button } from "./components/Button";


function App() {

  return (
    <div>
      <Button onClick={() => alert(new Date().toLocaleString())}>Click me!</Button>
    </div>
  );
}

export default App;