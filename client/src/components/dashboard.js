import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Save from "./Save";

const dashboard = () => {
  return (
    <div className="container mt-5">
      <AddTodo />
      <TodoList />
      <Save />
    </div>
  );
};

export default dashboard;
