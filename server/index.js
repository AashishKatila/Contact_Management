const express = require("express");

const app = express();

const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors"); // To access backend API

const serverless = require("serverless-http");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM contact_db";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const { name, email, contact } = req.body;
  const sqlInsert =
    "INSERT INTO contact_db (name,email,contact) VALUES (?,?,?)";
  db.query(sqlInsert, [name, email, contact], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM contact_db where id = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
      res.send({ message: "Contact deleted successfully" });
    }
  });
});

app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM contact_db WHERE id =?";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, contact } = req.body;
  const sqlUpdate = "UPDATE contact_db SET name = ?, email = ?,contact = ? WHERE id =?";
  db.query(sqlUpdate, [name,email,contact,id], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.get("/", (req, res) => {
  //     const sqlInsert = "INSERT INTO contact_db (name,email,contact) VALUES ('John','john@gmail.com',24242424)";
  //     db.query(sqlInsert,(err,result ) =>{
  //         console.log("Error",err)
  //         console.log("Result = ",result)
  //         res.send("Hello Express");
  //     })
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

module.exports = serverless(app);