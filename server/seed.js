import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS messages (
  name TEXT,
  message TEXT
)
`);

const insertStatement = db.prepare(
  `INSERT INTO messages (name, message) VALUES (?, ?)`
);

insertStatement.run("Bob", "Hello, world!");
insertStatement.run("Alice", "How are you?");
insertStatement.run("Robby", "I'm doing well, thanks!");
insertStatement.run("Reggie", "I'm good too!");
insertStatement.run("Peter", "I'm also good thank you for asking!");
insertStatement.run("Jane", "Rude");
insertStatement.run("Gabrielle", "All good over here");
insertStatement.run("Jenny", "");
