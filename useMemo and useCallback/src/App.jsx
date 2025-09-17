import React, { useReducer, useEffect, useCallback, useContext } from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext.jsx";
import { taskReducer } from "./reducers/taskReducer.js";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskStats from "./components/TaskStats.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

function AppContent() {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((text) => {
    dispatch({ type: "ADD", payload: text });
  }, []);

  const toggleTask = useCallback((id) => {
    dispatch({ type: "TOGGLE", payload: id });
  }, []);

  const removeTask = useCallback((id) => {
    dispatch({ type: "REMOVE", payload: id });
  }, []);

  return (
    <div
      className={`min-vh-100 d-flex flex-column ${
        dark ? "bg-dark text-light" : "bg-white text-dark"
      }`}
    >
      <div className="container py-5 flex-grow-1">
        <h2 className="mb-3 text-center">⚡ Smart Task Manager</h2>
        <ThemeToggle />
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
        <TaskStats tasks={tasks} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
