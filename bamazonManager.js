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
            if (answer.menuOptions === "View products for sale") {
                console.log("ayy")
                viewProducts();
            }else if (answer.menuOptions === "View low inventory") {
                lowInventory();
            }else if (answer.menuOptions === "Add to inventory") {
                addInventory()
            }else if (answer.menuOptions === "Add new product") {
                addProduct()
            }else {
                connection.end();
            }
        });
}
//allows user to display all products listed
function viewProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
     
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | "  + res[i].product_name + " | " + "$"+ res[i].price + " | " +"quantity: " + res[i].stock_quantity);
            
          }
            
          connection.end();
        
    });
}
//function that displays items with a stock_quantity < 5
function lowInventory(){
    //query products where stock_quantity < 5
    connection.query("SELECT * FROM products Where stock_quantity < 5", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | "  + res[i].product_name + " | " + "$"+ res[i].price + " | " +"quantity: " + res[i].stock_quantity);
            
          }  
          connection.end();
      });  
}

//function that allows user to add products to database
function addProduct() {
    // prompt for info about the item being added
    inquirer
      .prompt([
        {
          name: "item",
          type: "input",
          message: "What is the item you would like to submit?"
        },
        {
          name: "department",
          type: "input",
          message: "What department would you like to place your item in?"
        },
        {
          name: "price",
          type: "input",
          message: "What price would you like to sell your item for?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
            name: "stock",
            type: "input",
            message: "How many do you want to sell?"
        }
      ])
      .then(function(answer) {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          "INSERT INTO products SET ?",
          {
            product_name: answer.item,
            department_name: answer.department,
            price: answer.price,
            stock_quantity: answer.stock || 1
          },
          function(err) {
            if (err) throw err;
            console.log("Your auction was created successfully!");
            // re-prompt the user for if they want to bid or post
            connection.end();
          }
        );
      });
  }