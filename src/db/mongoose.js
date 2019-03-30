const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});
// mongoose database model
const User = mongoose.model("User", {
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    toLowerCAse: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    toLowerCAse: true,
    validate(value) {
      if (!value.length < 6) {
        throw new Error("Password should be greater than 6 characters");
      }
    },
    validate(password) {
      if (password.toLowerCAse().includes("password")) {
        throw new Error("Password can not contain 'password' ");
      }
    }
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
//   name: "Fatai",
//   email: "dewaleolaoye@gamail.com",
//   password: "#sweetsecure",
//   age: 24
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
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const myTask = new Task({
  description: " Learn ReactJs Next Month "
});

myTask
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
