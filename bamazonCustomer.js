var inquirer = require("inquirer");
var mysql = require("mysql");


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Collegebum1",
    database: "Bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

  function start() {
      // function which prompts the user for what action they should take
    inquirer
      .prompt({
        name: "welcome",
        type: "input",
        message: "Welcome to Bamazon! Please inter the product ID of the item you would like to buy"
      })
      .prompt({
          name: "quantity",
          type: "input",
          message: "Great! Now, select how many units you would like to buy"
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.welcome === "NaN") {
            console.log("Im sorry, we couldnt find the item you were looking for");
            return;
        }
        else {
          connection.end();
        }
      });
  }
 

function displayWares() {
    var query = connection.query("SELECT * FROM Bamazon.products", function(err, res){
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("PRODUCT ID: " + res[i].id + "   PRODUCT NAME: " + res[i].product_name + "   DEPARTMENT: " + res[i].department_name + "   PRICE: " + res[i].price);
    }
})};