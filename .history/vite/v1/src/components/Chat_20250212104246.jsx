/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const styles = {
    chatContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
    },
    messages: {
        flex: 1,
        overflowY: 'auto',
        marginBottom: '10px',
    },
    message: {
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '5px',
    },
    received: {
        backgroundColor: '#f1f1f1',
        alignSelf: 'flex-start',
        maxWidth: '70%'
    },
    sent: {
        backgroundColor: '#007bff',
        color: '#fff',
        alignSelf: 'flex-end',
                maxWidth: '70%'

    },
    inputContainer: {
        display: 'flex',
    },
    input: {
        flex: 1,
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginRight: '10px',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    },
};

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