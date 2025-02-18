/* eslint-disable no-unused-vars */
//import { Button } from "./components/Button";
//import { Counter } from "./components/Counter";
//import { Clock, Counter2 } from "./components/Counter2";
import { AlertClock } from "./components/AlertClock";
import Chat from "./components/Chat/Chat";
//import MouseClicker from "./components/MouseClicker";
import { InteractiveWelcome } from "./components";
import { Login } from "./components";
import UncontrolledLogin from "./components/UncontrolledLogin";

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

      <AlertClock onShowTime={() => alert(new Date().toLocaleString())} />
            <InteractiveWelcome/>
      <Login/>
      <UncontrolledLogin/>
      */}
      <Chat />
    </div>
  );
}

export default App;