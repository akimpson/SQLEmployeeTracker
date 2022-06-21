// Connect to database
const mysql = require("mysql2");

require("dotenv").config();

const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: process.env.DB_USER,
    // Your MySQL password
    password: process.env.DB_PW,
    database: "tech_university",
  },
  console.log("Connected to the Tech University database.")
);

module.exports = db;
