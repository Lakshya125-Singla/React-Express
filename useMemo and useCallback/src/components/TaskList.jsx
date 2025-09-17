import React, { useCallback } from "react";

function TaskList({ tasks, toggleTask, removeTask }) {
  const handleToggle = useCallback((id) => {
    toggleTask(id);
  }, [toggleTask]);

  const handleRemove = useCallback((id) => {
    removeTask(id);
  }, [removeTask]);

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            task.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            onClick={() => handleToggle(task.id)}
            style={{ cursor: "pointer", textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
          <button className="btn btn-danger btn-sm" onClick={() => handleRemove(task.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
