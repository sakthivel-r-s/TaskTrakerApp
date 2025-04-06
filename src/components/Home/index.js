import React, { useState, useEffect } from "react";
import "./index.css";

function Home() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false, id: Date.now(), isRemoving: false }]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isRemoving = true;
    setTasks(updatedTasks);
    setTimeout(() => {
      setTasks((prev) => prev.filter((_, i) => i !== index));
    }, 300);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <div className="task-card">
        <div className="header-row">
          <h2 className="task-title">Task Tracker</h2>
          <button onClick={() => setDarkMode(!darkMode)} className="dark-toggle">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            className="task-input"
          />
          <button onClick={addTask} className="add-button">
            Add Task
          </button>
        </div>

        <div className="task-list">
          {tasks.map((task, index) => (
            <div
              key={task.id}
              className={`task-item fade-in ${task.isRemoving ? 'fade-out' : ''}`}
            >
              <div
                onClick={() => toggleComplete(index)}
                className={`task-text ${task.completed ? "completed" : ""}`}
              >
                <div className={`status-indicator ${task.completed ? 'completed-circle' : ''}`}></div>
                {task.text}
              </div>
              <button onClick={() => deleteTask(index)} className="delete-button">
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home