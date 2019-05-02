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

function start() {
    // query the database for all products for sale
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // once you have the items, prompt the user for which product they want to buy
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
            //get info about chosen item
            .then(function (answer) {
                var chosenItem; 
               var checkItem = answer.choice.replace(/ *\([^)]*\) */g, "");
        for (var i = 0; i < results.length; i++) {
            if (results[i].product_name === checkItem) {
              chosenItem = results[i];
            
            }
        }
        //check the stock to make sure we can fullfill the order
           var amount = chosenItem.stock_quantity 
        if(chosenItem.stock_quantity >= parseInt(answer.amount)) {
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    stock_quantity:  amount-answer.amount
                  },
                  {
                    product_name: chosenItem.product_name
                  }
                ],
                //total the final order and let user know they succesfully bought item
                function(error) {
                  if (error) throw err;
                  console.log("\n---------------------------------------------------\n");
                  console.log("Your Total Is: $" + answer.amount * chosenItem.price)
                  console.log(chosenItem.product_name + " bought succesfully");
                  console.log("\n---------------------------------------------------\n");
                  connection.end();
                }
              );
        }
        //lets the user know we are out of stock
        else{
            console.log("\n---------------------------------------------------\n");
            console.log("Sorry we are out of stock");
            console.log("\n---------------------------------------------------\n");
            connection.end();
        }
            });
    });
};
