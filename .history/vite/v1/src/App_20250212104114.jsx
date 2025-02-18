//import { Button } from "./components/Button";
//import { Counter } from "./components/Counter";
//import { Clock, Counter2 } from "./components/Counter2";
import Chat from "./components/Chat";
import MouseClicker from "./components/MouseClicker";


function App() {

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      gap: 100
    }}>
      {/* 
      <div>
        <Button onClick={() => alert(new Date().toLocaleString())}>Click me!</Button>
      </div> 
      <Counter />
      <Counter2 />
      <Clock />
      <MouseClicker />
      */}
      <Chat />
    </div>
  );
}

export default App;