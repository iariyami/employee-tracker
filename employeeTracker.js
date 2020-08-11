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
      message: "",
      choices: ["", "", "", "", ""],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "":
          aSearch();
          break;

        case "":
          bSearch();
          break;

        case "":
          cSearch();
          break;

        case "":
          dSearch();
          break;

        case "":
          connection.end();
          break;
      }
    });
}
