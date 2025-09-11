import React from 'react';

function Todo({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo ${todo.completed ? 'completed' : ''}`}>
      <span className="todo-text">{todo.text}</span>
      <div className="button-group">
        <button onClick={() => toggleTodo(index)}>
          {todo.completed ? 'Undo' : 'Done'}
        </button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </li>
  );
}

export default Todo;
