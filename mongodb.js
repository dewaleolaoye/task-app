// CRUD: CREAT READ UPDATE DELETE
// const MongoClient = mongodb.MongoClient();
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = require("mongodb"); // object destructuring

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return "Unable to connect to the Database";
    // console.log("Database Connected");
    const db = client.db(databaseName);
    // db.collection("users")
    //   .deleteMany({
    //     age: 27
    //   })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    db.collection("tasks")
      .deleteOne({
        _id: new ObjectID("5c9ce0812b880c67154fab1a")
      })
      .then(result => {
        console.log(result.deletedCount);
      })
      .catch(error => {
        console.log(error);
      });
  }
);
