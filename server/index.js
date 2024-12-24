const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// MySQL connection pool
const db = mysql.createPool({
  host: "localhost", 
  user: "root", 
  password: "", 
  database: "contact", 
});

app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM contact_db";
  db.query(sqlGet, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(result);
    }
  });
});

module.exports = app;
