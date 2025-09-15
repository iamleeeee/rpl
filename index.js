const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "192.168.1.5",
  user: "user1",
  password: "Lee123^^",
  database: "attendance_db"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM records LIMIT 5", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
