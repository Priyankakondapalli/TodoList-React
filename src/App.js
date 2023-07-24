import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTodo = { id: uuidv4(), title: inputValue.trim() };
      setTodoList([...todoList, newTodo]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (todoId) => {
    const filteredTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(filteredTodoList);
  };

  const handleEditTodo = (todoId) => {
    const editedText = prompt("Edit a value");
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, title: editedText };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="Todoapp">
      <div className="TodoWrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the name"
            className="todo-input"
            value={inputValue}
            onChange={handleInputChange}
          />
          <input type="submit" value="Add Task" className="todo-btn" />
        </form>

        {todoList.map((todo) => (
          <div className="Todooo" key={todo.id}>
            <div>
              <p>{todo.title}</p>
              <div className="Todooo">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  onClick={() => handleEditTodo(todo.id)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDeleteTodo(todo.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

