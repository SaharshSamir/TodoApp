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
