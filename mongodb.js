// CRUD: CREAT READ UPDATE DELETE
// const MongoClient = mongodb.MongoClient();
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = require("mongodb"); // object destructuring

const connectionURL = "mongodb://127.0.0.1:27018";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return "Unable to connect to the Database";
    // console.log("Database Connected");
    const db = client.db(databaseName);
    //     db.collection("users").findOne(
    //       { _id: new ObjectID("5c9ce0812b880c67154fab18") },
    //       (error, user) => {
    //         if (error) {
    //           return console.log("Unable to find user");
    //         }
    //         console.log(user);
    //       }
    //     );

    //     db.collection("users")
    //       .find({ age: 27 })
    //       .toArray((error, user) => {
    //         if (error) {
    //           return console.log("Unable to find users");
    //         }
    //         console.log(user);
    //       });
    // // count
    //     db.collection("users")
    //       .find({ name: "Adewale" })
    //       .count((error, count) => {
    //         console.log(count);
    //       });

    // findOne
    db.collection("tasks").findOne(
      { _id: new ObjectID("5c9ce0812b880c67154fab1c") },
      (err, task) => {
        if (err) {
          return console.log("Unable to find user with id");
        }
        console.log(task);
      }
    );
    // find
    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, task) => {
        if (error) {
          return console.log("Unable to find uncompleted task");
        }
        console.log(task);
      });
  }
);
