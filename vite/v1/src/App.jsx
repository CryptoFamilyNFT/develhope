//import { Button } from "./components/Button";
import { Counter } from "./components/Counter";


function App() {

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    }}>
      {/* 
      <div>
        <Button onClick={() => alert(new Date().toLocaleString())}>Click me!</Button>
      </div> 
      */}
      <Counter />
    </div>
  );
}

export default App;