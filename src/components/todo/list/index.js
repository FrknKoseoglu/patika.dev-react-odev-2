import { useState } from "react";

function List({ todos }) {
  const [filterText, setFilterText] = useState("");

  return (
    <ul className="todo-list">
      {todos.map((todo, i) => (
        <li key={i} className="view">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{todo.todo_item}</label>
            <button className="destroy" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
