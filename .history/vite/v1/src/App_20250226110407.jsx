/* eslint-disable no-unused-vars */
//import { Button } from "./components/Button";
//import { Counter } from "./components/Counter";
//import { Clock, Counter2 } from "./components/Counter2";
//import MouseClicker from "./components/MouseClicker";
//import {Login}  from "./components/Login";
//import Welcome from "./components/Welcome";
//import Welcome from "./components/Welcome";
//import CounterDisplay from "./components/CounterDisplay";
//import TodoList from "./components/TodoList/TodoList";
import React, { useEffect } from "react";
import FocusableInput from "./components/FocusableInput/FocusableInput";
import MemoUseCase from "./components/MemoUseCase";
import { Users } from "./components/Users";
import UserWithoutCallback from "./components/UsersWithoutCallback";
import { LanguageContext } from "./helper/LanguageContext";
import NotificationApp from "./NotificationApp";
import { NotificationProvider } from "./NotificationContext";
import LanguageHelper from "./helper/LanguageHelper";

function App() {
  const {context, saveContext} = React.useContext(LanguageContext);
  const [langSelected, selectLang] = React.useState(null)

  function switchText(lang) {
    selectLang(lang);
    const switchedText = LanguageHelper.switchText(lang);
    saveContext({...context, lang, textTranslated: switchedText});
    console.log(switchedText)
    return switchedText
  }

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
      {/*<TodoList />
    <Welcome name={"Mario"}/>
    <Login/>
    <CounterDisplay>
      3
    </CounterDisplay>
    <Users/>*/}
    <div id="context-lang">
      <input type="text" value={context?.lang} onChange={(e) => saveContext({...context, lang: e.target.value})} />
      <h2>{context.textTranslated}</h2>
      <input type="checkbox" checked={langSelected === 'en'} value={'en'} onChange={(e) => switchText(e.target.value)} />
      <input type="checkbox" checked={langSelected === 'fr'} value={'fr'} onChange={(e) => switchText(e.target.value)} />
      <input type="checkbox" checked={langSelected === 'es'} value={'es'} onChange={(e) => switchText(e.target.value)} />
    </div>

    </div>
  );
}

export default App;