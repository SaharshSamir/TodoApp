import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../redux/actionsCreators";

class Save extends Component {
  renderSaveButton = tasks => {
    if (!tasks.length) {
      return {
        display: "none"
      };
    }
  };

  save = async (tasks, deletedTodos) => {
    if (!tasks.length) {
      alert("You need to have some todods");
    } else {
      await this.props.saveTodos(tasks);
    }
    if (deletedTodos.length) {
      await this.props.deleteTodos(deletedTodos);
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center m-4">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => {
            this.save(this.props.tasks, this.props.deletedTodos);
          }}
          style={this.renderSaveButton(this.props.tasks)}
          href="/"
        >
          Save
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks,
    deletedTodos: state.tasks.deletedTodos,
    redirectTo: state.tasks.redirectTo
  };
}

export default connect(mapStateToProps, actions)(Save);
