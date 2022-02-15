import { useState } from "react";

function Form({ addTodos, todos }) {
  const [form, setForm] = useState({ todo_item: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const FormSubmit = (e) => {
    e.preventDefault();

    if (form.todo_item === "") {
      return false;
    }
    addTodos([...todos, form]);
    setForm({ todo_item: "" });
  };

  return (
    <form onSubmit={FormSubmit}>
      <input
        name="todo_item"
        className="new-todo"
        onChange={onChangeInput}
        placeholder="What needs to be done?"
      />
      <button className="btn-add">Add</button>
    </form>
  );
}

export default Form;
