// mongoose database model for users
const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    trim: true,
    required: true
  },

  email: {
    type: String,
    trim: true,
    toLowerCase: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },

  password: {
    type: String,
    minlength: 7,
    required: true,
    trim: true,
    validate(password) {
      if (password.toLowerCase().includes("password")) {
        throw new Error("Password can not contain 'password' ");
      }
    }
  },

  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive Number");
      }
    }
  }
});

module.exports = User;
