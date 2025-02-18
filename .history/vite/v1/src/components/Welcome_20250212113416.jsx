/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';

function Welcome({ name }) {
  return (
    <p>
      {name ? `Hello, ${name}!` : 'Hello!'}
    </p>
  );
}

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
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleLogin = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setAlert({
        type: 'error',
        message: 'Password must be at least 8 characters long',
      })
    } else {
      setAlert({
        type: 'success',
        message: 'Login successful!',
      });
    }

    onLogin({ username, password, remember });
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setRemember(false);
  };

  return (
    <div>
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
          {alert.message && (
            <div className={`alert ${alert.type}`}>
              {alert.message}
            </div>
          )}
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
    </div>
  );
}

export { InteractiveWelcome, Login };
