const express = require('express');

const app = express();

const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors') // To access backend API

const  db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"contact"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/get",(req,res) =>{
    const sqlGet = "SELECT * FROM contact_db";
    db.query(sqlGet,(error,result) =>{
        res.send(result);
    })
})

app.post("/api/get",(req,res) =>{
    const {name,email,contact} = req.body;
    const sqlInsert = "INSERT INTO contact_db (name,email,contact) VALUES (?,?,?)";
    db.query(sqlInsert,[name,email,contact],(error,result) =>{
        if(error){
            console.log(error)        
        }
    })
})

app.get("/",(req,res) =>{
//     const sqlInsert = "INSERT INTO contact_db (name,email,contact) VALUES ('John','john@gmail.com',24242424)";
//     db.query(sqlInsert,(err,result ) =>{
//         console.log("Error",err)
//         console.log("Result = ",result)
//         res.send("Hello Express"); 
//     })
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})