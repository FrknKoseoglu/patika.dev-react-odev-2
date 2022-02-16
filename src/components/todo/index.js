import { useState, useEffect } from "react";

import List from "./list";
import Form from "./form";

function ToDo() {
  const [todos, setTodos] = useState([
    { todo_item: "Learn React!" },
    { todo_item: "Yeah Sex" },
  ]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <Form addTodos={setTodos} todos={todos} />
      </header>

      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <List addTodos={setTodos} todos={todos} />
        <footer className="footer">
          <span className="todo-count">
            <strong>{todos.length} </strong>
            items left
          </span>
          <ul className="filters">
            <li>
              <a href="#/" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/">Completed</a>
            </li>
          </ul>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    </section>
  );
}

export default ToDo;
