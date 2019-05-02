var mysql = require("mysql");
var inquirer = require("inquirer");


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // port that we are using
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "yourRootPassword",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});


// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "menuOptions",
            type: "list",
            message: "List of menu option, please select one.",
            choices: ["View products for sale", "View low inventory", "Add to inventory", "Add new product"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.MenuOptions === "View products for sale") {
                viewProducts();
            }
            else if (answer.MenuOptions === "View low inventory") {
                lowInventory();
            } else if (answer.MenuOptions === "Add to inventory") {
                addInventory()
            }else if (answer.MenuOptions === "Add new product") {
                addProduct()
            }
            else {
                connection.end();
            }
        });
}
