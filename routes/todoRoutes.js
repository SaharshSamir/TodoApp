const mongoose = require("mongoose");
const _ = require("lodash");

const Todo = mongoose.model("todos");

module.exports = app => {
  app.post("/api/save_todos", (req, res) => {
    // console.log(req.body);
    const { todos } = req.body;
    _.map(todos, async el => {
      const { id, text, done } = el;
      const todo = new Todo({
        id,
        text,
        done,
        _user: req.user.id
      });

      //preventing default
      const existingTodo = await Todo.findOne({
        id
      });

      if (existingTodo) {
        //the same todo already exisits
        res.send({ existingTodo });
      } else {
        try {
          await todo.save();
          const user = await req.user.save();
          res.send({
            newUser: user,
            done: true
          });
        } catch (err) {
          res.status(422).send(err);
        }
      }
    });
  });

  app.post("/api/delete_todos", (req, res) => {
    const { deletedTodos } = req.body;

    if (deletedTodos.length) {
      _.map(deletedTodos, async el => {
        try {
          const deletedTodo = await Todo.findOneAndDelete({
            id: el.id
          });
          console.log(deletedTodo);
          res.send({
            done: true
          });
        } catch (err) {
          res.send(err);
        }
      });
    }
  });

  app.get("/api/get_todos", async (req, res) => {
    const { id } = req.user;

    try {
      const userTodos = await Todo.find({
        _user: id
      });
      res.send({ userTodos });
    } catch (err) {
      res.send(err);
    }
  });
};
