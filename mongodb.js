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
    // update
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5c9ce59a47e52d1778ffa7bb")
    //     },
    //     {
    //       $inc: {
    //         age: 5
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log("Errors: ", error);
    //   });
    db.collection("tasks")
      .updateMany(
        {
          completed: false
        },
        { $set: { completed: true } }
      )
      .then(result => {
        console.log(result.modifiedCount);
      })
      .catch(error => {
        console.log(error);
      });
  }
);
