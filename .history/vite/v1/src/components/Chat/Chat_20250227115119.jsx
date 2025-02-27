/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ChatStyles as styles } from './chatStyle';

const Chat = () => {
    const [messages, setMessages] = useState([
        { text: 'Hello!', sender: 'received' },
        { text: 'Hi there!', sender: 'sent' },
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'sent' }]);
            setInput('');
        }
    };

    const handleResponse = () => {
        const randomPhrase = [
            'Ciao',
            'Come stai??',
            'Che mi dici?',
            'Tutto bene'
        ]

        setMessages([...messages, { text: randomPhrase[Math.random(1 * randomPhrase.length)], sender: 'sent' }]);
    }

    return (
        <div style={styles.chatContainer}>
            <div style={styles.messages}>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.message,
                            ...(message.sender === 'received' ? styles.received : styles.sent),
                        }}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                    style={styles.input}
                />
                <button onClick={handleSend} style={styles.button}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;