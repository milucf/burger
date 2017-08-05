var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "your username",
  password: "your password",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err
});

module.exports = connection;