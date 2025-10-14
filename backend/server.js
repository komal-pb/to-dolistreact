import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./db.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Get all todos
app.get("/api/todos", (req, res) => {
  db.query("SELECT * FROM todos", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// Add new todo
app.post("/api/todos", (req, res) => {
  const { title } = req.body;
  db.query("INSERT INTO todos (title) VALUES (?)", [title], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, title });
  });
});

// Delete todo
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM todos WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true });
  });
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
