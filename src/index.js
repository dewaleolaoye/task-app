const express = require("express");
require("./db/mongoose");
const User = require("./models/users");
const Task = require("./models/tasks");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// CREATE for Users
app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

// CREATE for Tasks
app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.status(201).send(req.body);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.listen(port, () => {
  console.log("App runing on " + port);
});
