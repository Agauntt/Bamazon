var inquirer = require("inquirer");
var mysql = require("mysql");

// Purchase variables 
var b;
var qty;
var item;
var stock;

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "Bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    //run the start function after the connection is made to prompt the user
    displayWares();
  });

  function displayWares() {

    console.log("--------------- WELCOME TO BAMAZON!! ---------------------")
    connection.query("SELECT * FROM Bamazon.products", function(err, res){
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("PRODUCT ID: " + res[i].id + "   PRODUCT NAME: " + res[i].product_name + "   DEPARTMENT: " + res[i].department_name + "   PRICE: " + res[i].price + " CURRENT STOCK: " + res[i].stock);
            console.log("----------------------------------------------------------------------")
        }
       
            inquirer.prompt([{
              name: "welcome",
              type: "input",
              message: "Welcome to Bamazon! Please inter the product ID of the item you would like to buy"
            },
            {
                name: "quantity",
                type: "input",
                message: "Great! Now, select how many units you would like to buy"
            }])
            .then(function(answer) {
              // based on their answer, either call the bid or the post functions
              if (answer.welcome === "NaN") {
                  console.log("Im sorry, we couldnt find the item you were looking for");
                  return;
              }
              b = answer.welcome;
              qty = answer.quantity;
              item = res[b - 1].product_name;
              stock = res[b - 1].stock;
              newStock = parseInt(stock - qty);
              
              price = parseInt(qty) * parseInt(res[b - 1].price);
              // console.log(item);
              // console.log(qty);
              // console.log(newStock);
              
              if (qty > stock) {
                console.log("I'm sorry, we don't have that many in stock.");
              } else {
                console.log("Thank you for your purchase of " + item + ". You're total for today is $" + price); 
              }
             
          })
          .then(function() {       
            connection.query("UPDATE products SET ? WHERE ?",
             [
               {
                 stock: newStock
               },
               {
                 id: b
               }
            ], function(err) {
              if (err) throw err;
              roundAgain();
            }
            )
          })
        })
      }

      function roundAgain(){
        inquirer
          .prompt({
            name: "buyMore",
            type: "list",
            message: "Welcome to Bamazon! Please inter the product ID of the item you would like to buy",
            choices: ["YES", "NO"]
        })
        .then(function(answer) {
          // based on their answer, either call the bid or the post functions
          if (answer.buyMore === "YES") {
              // console.log("old stock: " + stock);
              // console.log("new stock: " + newStock);
              displayWares();
          } else {
            connection.end();
          }
      })
    }





      
 


