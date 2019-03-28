// CRUD
// const MongoClient = mongodb.MongoClient();
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = require("mongodb"); // object destructuring

const id = new ObjectID();
console.log(id);
console.log(id.id);
console.log(id.id.length);
console.log(id.toHexString().length);
const connectionURL = "mongodb://127.0.0.1:27018";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return "Unable to connect to the Database";
    // console.log("Database Connected");
    const db = client.db(databaseName);
    // users collection
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Adewale",
    //     age: 27
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert users");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // // task collection
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Learn React in April",
    //       completed: false
    //     },
    //     {
    //       description: "Use piggybank to save",
    //       completed: false
    //     },
    //     {
    //       description: "Start writing in April",
    //       completed: false
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert users description");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
