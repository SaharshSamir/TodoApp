import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import authReducer from "./authReducer";

export default combineReducers({
  tasks: todoReducer,
  auth: authReducer
});
