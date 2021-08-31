import { useState } from "react";

export default function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <h2>{"Add Todo"}</h2>
        </div>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </div>
      <button variant="primary mb-3" type="submit">
        Submit
      </button>
    </form>
  );
}
