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
import React, { useState } from "react";
import { LanguageContext } from "./helper/LanguageContext";
import LanguageHelper from "./helper/LanguageHelper";
import GitHubUsers from "./components/GitHubUser/GitHubUsers";
import useCounter from "./components/hooks/useCounter";
import useGithubUser from "./components/hooks/useGithubUser";

function App() {
  const {context, saveContext} = React.useContext(LanguageContext);
  const [langSelected, selectLang] = React.useState(null)
  const {count, increment } = useCounter(0);
  const [username, setUsername] = useState('mario');
  const [user, setUser] = useState({
    user: null,
    loading: false,
    error: null
  });

  function switchText(lang) {
    selectLang(lang);
    const switchedText = LanguageHelper.switchText(lang);
    saveContext({...context, lang, textTranslated: switchedText});
    console.log(switchedText)
    return switchedText
  }

  function UpdateUserGithub(username) {
    setUsername(username);
    const {user, loading, error} = useGithubUser('username');
    setUser({user, loading, error});
  }

  console.log(context)

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
      <h2>{context.textTranslated}</h2>
      <input type="text" value={context?.lang} onChange={(e) => saveContext({...context, lang: e.target.value})} />
      <input type="checkbox" checked={langSelected === 'en'} value={'en'} onChange={(e) => switchText(e.target.value)} title="en" />
      <input type="checkbox" checked={langSelected === 'fr'} value={'fr'} onChange={(e) => switchText(e.target.value)} title="fr" />
      <input type="checkbox" checked={langSelected === 'es'} value={'es'} onChange={(e) => switchText(e.target.value)} title="es" />
    </div>

      {/* GITHUB USERS */}
     <GitHubUsers />

     {/* useCounter */}
     <div>
      {count}
      <button onClick={() => increment()}>Increment</button>
     </div>

     {/* useGitHubUser */}
     <div>
      <form onSubmit={(e) => UpdateUserGithub(e.target.value)}>
        <input type="text" value={username} />
        <button type="submit">Search</button>
      </form>
      {user.loading && <p>Loading...</p>}
      {user.error && <p>Error: {user.error}</p>}
      {user.user && (
        <div>
          <h1>{user.user.name}</h1>
          <p>{user.user.login}</p>
          {user.user.avatar && <img src={user.user.avatar} width={'100px'} height={'auto'}/>}
        </div>
      )}
     </div>
    </div>
  );
}

export default App;