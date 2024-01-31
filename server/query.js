import Database from "better-sqlite3";
const db = new Database("database.db");

//Get everything from the messages table
const messages = db.prepare("SELECT * FROM messages").all();
console.log("messages", messages);

//Get a certain name
const messageName = db
  .prepare("SELECT * FROM messages WHERE name ='Peter'")
  .get();
console.log("Messages from Peter", messageName);

//Get messages that contain
const messageContains = db
  .prepare("SELECT * FROM messages WHERE message LIKE '%good%'")
  .all();
console.log("Messages that contain good", messageContains);
