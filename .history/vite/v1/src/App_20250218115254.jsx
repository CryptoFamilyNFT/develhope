/* eslint-disable no-unused-vars */
//import { Button } from "./components/Button";
//import { Counter } from "./components/Counter";
//import { Clock, Counter2 } from "./components/Counter2";
//import MouseClicker from "./components/MouseClicker";
import {Login}  from "./components/Login";
//import Welcome from "./components/Welcome";
import Welcome from "./components/Welcome";
import CounterDisplay from "./components/CounterDisplay";
import TodoList from "./components/TodoList/TodoList";

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
            <Chat />
                  <TodoList/>
                  <Color>
                  <Colors colors={[{id: 1, color: 'red'}]}
                      <Welcome/>

      */}
    <TodoList />
    <Welcome name={"Mario"}/>
    <Login/>
    <CounterDisplay>
      3
    </CounterDisplay>
    </div>
  );
}

export default App;