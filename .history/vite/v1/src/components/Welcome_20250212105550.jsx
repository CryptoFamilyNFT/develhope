/* eslint-disable react/prop-types */
import  { useState } from 'react';
import Welcome from './Welcome';

function InteractiveWelcome() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <Welcome name={name} age={25} />
    </div>
  );
}

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ username, password, remember });
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setRemember(false);
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Remember me:
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
        </label>
      </div>
      <button type="submit" disabled={!username || !password}>
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export { InteractiveWelcome, Login };
