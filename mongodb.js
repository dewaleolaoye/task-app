const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient();

const connectionURL = "mongodb://127.0.0.1:27018";
const databaseName = "task-manager";

mongodb.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) return "Unable to connect to the Database";
  console.log("Database Connected");
});
