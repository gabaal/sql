import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(
  `UPDATE messages SET message = 'Hello, world! from Bob' WHERE name = 'Bob'`
);
