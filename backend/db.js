import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@123",
  database: "todo_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ MySQL Connected!");
});

export default db;
