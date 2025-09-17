import React, { useState, useRef, useCallback } from "react";

function TaskForm({ addTask }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input);
    setInput("");
    inputRef.current.focus();
  }, [input, addTask]);

  return (
    <form className="d-flex mb-3" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="form-control me-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button className="btn btn-primary">Add</button>
    </form>
  );
}

export default TaskForm;
