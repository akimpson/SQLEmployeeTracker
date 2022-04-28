//Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

// Connection-
const connection = mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "root",
    password: "password",
    database: "employee_tracker_db"
});

const runSearch = () => {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
           "Add Department",
           "Add Employee", 
           "Add Role",
           "Update Employee Role",
           "View All Roles",
           "View All Employees",
           "View All Departments",
           "Quit",
        ]
    })
}