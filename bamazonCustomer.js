var mysql = require("mysql");
var inquirer = require("inquirer");


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
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

function start() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // once you have the items, prompt the user for which they'd like to bid on
        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].product_name + " ($" + results[i].price + ")");
                        }
                        return choiceArray;

                    },
                    message: "What item would you like to buy?"
                },
                {
                    name: "amount",
                    type: "input",
                    message: "How many would you like to buy?",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                }
            ])
            .then(function (anwser) {
                var chosenItem;
                console.log(anwser.amount)
               var checkItem = anwser.choice.replace(/ *\([^)]*\) */g, "");
        for (var i = 0; i < results.length; i++) {
            if (results[i].product_name === checkItem) {
              chosenItem = results[i];
            
            }
        }

        if(chosenItem.stock_quantity >= parseInt(anwser.amount)) {
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    stock_quantity:  -- anwser.amount
                  },
                  {
                    product_name: chosenItem.product_name
                  }
                ],
                function(error) {
                  if (error) throw err;
                  
                  console.log(chosenItem.product_name + " bought succesfully, redirecting you back to product list");
               start()
                }
              );
        }
        else{
            console.log("Sorry we are out of stock");
            start()
        }
            });
    });
};
