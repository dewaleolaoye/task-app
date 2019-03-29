const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27018/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model("User", {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

const me = new User({
  name: "Adewale",
  age: 45
});

me.save()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
