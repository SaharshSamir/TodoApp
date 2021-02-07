const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = {
  id: Number,
  text: String,
  done: { type: Boolean, default: false },
  //relational field to relate this todo to a user
  _user: { type: Schema.Types.ObjectId, ref: "Users" }
};

//make new model class
mongoose.model("todos", todoSchema);
