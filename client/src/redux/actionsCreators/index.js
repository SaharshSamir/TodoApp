import axios from "axios";

export const addTodo = text => {
  return function(dispatch) {
    dispatch({
      type: "ADD_TODO",
      payload: {
        text: text,
        done: false
      }
    });
  };
};

export const isDone = id => {
  return function(dispatch) {
    dispatch({
      type: "TOGGLE_DONE",
      payload: {
        id: id,
        done: true
      }
    });
  };
};

export const deleteTodo = id => {
  return function(dispatch) {
    dispatch({
      type: "DELETE_TODO",
      payload: id
    });
  };
};

export const fetchUser = () => {
  return async function(dispatch) {
    const res = await axios.get("/api/current_user");

    dispatch({ type: "FETCH_USER", payload: res.data });
  };
};

export const saveTodos = todos => {
  return async dispatch => {
    const res = await axios.post("/api/save_todos", {
      todos
    });
    dispatch({ type: "TODO_SAVED", payload: res.data });
  };
};

export const deleteTodos = deletedTodos => {
  return async dispatch => {
    const res = await axios.post("/api/delete_todos", {
      deletedTodos
    });
    dispatch({ type: "TODO_DELETED", payload: res.data });
  };
};

export const fetchTodos = () => {
  return async dispatch => {
    const res = await axios.get("/api/get_todos");

    console.log(res.data);
    dispatch({ type: "FETCH_TODOS", payload: res.data });
  };
};
