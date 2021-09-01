export default function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className={"todo"}>
      <p style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </p>
      <div>
        <button className={"btn + doneBtn"} onClick={() => markTodo(index)}>
          {"Done"}
        </button>
        <button className={"btn + deleteBtn"} onClick={() => removeTodo(index)}>
          {"Delete"}
        </button>
      </div>
    </div>
  );
}
