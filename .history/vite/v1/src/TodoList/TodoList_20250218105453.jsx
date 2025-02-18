import React from 'react';

const TodoList = () => {
    const [todos, setTodos] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((i) => i !== index);
        setTodos(newTodos);
    };

    const resetTodos = () => {
        setTodos([]);
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={resetTodos}>Reset</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;