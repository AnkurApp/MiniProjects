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
    <form className={"form"} onSubmit={handleSubmit}>
      <h2>{"Add Todo"}</h2>

      <input
        type="text"
        className={"input"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add New Todo"
      />

      <button type="submit" className={"btn"}>
        {" Submit"}
      </button>
    </form>
  );
}
