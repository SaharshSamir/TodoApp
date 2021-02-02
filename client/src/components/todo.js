import React from "react";
import { connect } from "react-redux";

const todo = ({ task, id, tasks }) => {
  const completed = {
    textDecoration: "line-through",
    fontStyle: "italic",
    fontWeight: "lighter"
  };

  var currentTodo = tasks.find(el => el.id == id);

  var done = currentTodo.done;

  var applyStyles = done => {
    if (done) {
      return completed;
    }
  };

  return (
    <li
      className="list-group-item border border-dark w-100 "
      id={id}
      style={applyStyles(done)}
    >
      <strong>{task}</strong>
    </li>
  );
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks
  };
}

export default connect(mapStateToProps)(todo);
