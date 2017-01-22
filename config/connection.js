// Set up MySQL conneciton
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "pimpin66",
    database: "burger_db"
});

//Make connection
connection.connect(function(err){
    if (err){
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

//Export connection for ORM to user
module.exports = connection;