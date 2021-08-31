import React, { useState } from "react";
import Todo from "./Components/Todo";
import FormTodo from "./Components/FormTodo";

export default function ToDoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

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
    <div>
      <div className="container">
        <h1>{"Todo List"}</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos?.map((todo, index) => (
            <div>
              <div>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
