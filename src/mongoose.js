const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27018/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});
// mongoose database model
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive Number");
      }
    }
  }
});

// const me = new User({
//   name: "Adewale",
//   age: 45
// });

// me.save()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean
  }
});

const myTask = new Task({
  description: "Learn ReactJs Next Month",
  completed: false
});

myTask
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
