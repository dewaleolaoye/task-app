const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient();

const connectionURL = "mongodb://127.0.0.1:27018";
const databaseName = "task-manager";

mongodb.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) return "Unable to connect to the Database";
  // console.log("Database Connected");
  const db = client.db(databaseName);
  // users collection
  db.collection("users").insertMany(
    [
      {
        name: "Adewale",
        age: 27
      },
      {
        name: "Clinton",
        age: 42
      }
    ],
    (error, result) => {
      if (error) {
        return console.log("Unable to insert users");
      }
      console.log(result.ops);
    }
  );
  // task collection
  db.collection("tasks").insertMany(
    [
      {
        description: "Learn React in April",
        completed: false
      },
      {
        description: "Use piggybank to save",
        completed: false
      },
      {
        description: "Start writing in April",
        completed: false
      }
    ],
    (error, result) => {
      if (error) {
        return console.log("Unable to insert users description");
      }
      console.log(result.ops);
    }
  );
});
