import React from "react";

export default function TodoListApp() {

    const [tasks, setTasks] = React.useState([]);
    const [newTask, setNewTask] = React.useState("");

    const handleAdd = () => {
        if (!newTask.trim()) return;
        setTasks([...tasks, newTask]);
        setNewTask("");
    }

    return (
        <div style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0"}}>
            <div style={{width: "400px", padding: "20px", backgroundColor: "#fff", borderRadius: "5px", boxShadow: "0 0 10px rgba(0,0,0,0.1)"}}>
                <h2 style={{textAlign: "center", marginBottom: 2}}>Todo List</h2>
                <div style={{display: "flex", gap: "10px", marginBottom: 2}}>
                    <input style={{flex: 1, padding: "5px", borderRadius: "3px", border: "1px solid #ddd"}} type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                    <button style={{padding: "5px 10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "3px"}} onClick={() => {
                        handleAdd
                    }}>Add</button>
                    <div style={{marginTop: "10px"}}>
                        <ul>
                            {tasks.map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}