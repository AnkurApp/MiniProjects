import React, { useEffect, useState } from "react";
import Todo from "./Components/Todo";
import FormTodo from "./Components/FormTodo";
import "./style.css";

export default function ToDoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoAdded = JSON.parse(localStorage.getItem("TodoList"));
    if (todoAdded) {
      setTodos(todoAdded);
    }
  }, []);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todos));
  }, [todos]);

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="mainContainer">
      <h1>{"Todo List"}</h1>
      <FormTodo addTodo={addTodo} />

      {todos?.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          markTodo={markTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}
