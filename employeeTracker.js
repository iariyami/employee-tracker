var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Port
  port: 3306,

  // Username
  user: "root",

  // Password
  password: "",
  database: "",
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Select your action",
      choices: ["Add a Department",
        "Add a new Role",
        "Add an Employee",
        "View Departments",
        "View Roles",
        "View Employees",
        "Update Employee"],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add a Department":
          aSearch();
          break;

        case "Add a new Role":
          bSearch();
          break;

        case "Add an Employee":
          cSearch();
          break;

        case "View all Departments":
          dSearch();
          break;

        case "View all Roles":
          eSearch();
          break;

        case "View all Roles":
          fSearch();
          break;

        case "View all Departments":
          gSearch();
          break;
      }
    });
}
