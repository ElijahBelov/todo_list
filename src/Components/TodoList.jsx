import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [headingInput, setheadingInput] = useState('');
    const [listInputs, setListInputs] = useState({}); 

    const handleAddTodo = () => {
        if (headingInput.trim() === '') 
            return;
        
        setTodos([...todos, {heading:headingInput, lists:[]}]);
        setheadingInput('');
        
    }

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setheadingInput(e.target.value);}}
            
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {
            todos.map((todo, index) => (
                <div key={index} className="todo-card">
                    <div className="heading_todo">
                        <h3>{todo.heading}</h3>
                        {todo.lists}
                        <button className="delete-button-heading">Delete Heading </button>
                    </div>
                </div>
            ))
        }
      </div>
    </>
  );
};

export default TodoList;
