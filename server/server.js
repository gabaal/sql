import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const app = express();

//Root routes
app.get("/", (req, res) => {
  res.send("GET at ./");
});

// Add the database route
const db = new Database("database.db");

app.get("/messages", (req, res) => {
  try {
    if (req.query.id) {
      res.status(200).send("you sent a query");
    }
    // .prepare() will prepare the sql query.
    // .all() will execute the sql query.
    let messages = db.prepare("SELECT * FROM messages").all();
    res.status(200).json(messages);
    //  .catch() will catch any errors.
  } catch (err) {
    res.status(500).json(err);
  }
});
// I will be listening
const PORT = "2224";

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
