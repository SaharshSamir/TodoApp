import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const dashboard = () => {
  return (
    <div className="container mt-5">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default dashboard;
