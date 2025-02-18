/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export const Login = () => {
    const [password, setPassword] = useState('');

    return (
        <div>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
            />
            <button
                style={{
                    backgroundColor: password.length < 8 ? 'red' : 'green',
                }}
            >
                Login
            </button>
        </div>
    );
};