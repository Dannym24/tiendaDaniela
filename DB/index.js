//const { Pool } = require('pg');

//const pool = new Pool({
  //user: 'postgres',
  //host: 'localhost',
  //database: 'postgres',
  //password: 'Marado86',
  //port: 5432,
//});


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "postgres",
  password: "Marado86",
  database: "postgres"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // Insert a record in the "tiendaDaniela" table:
  var sql = "INSERT INTO products (product_id, description, name, price) VALUES (value1, value2, value3, value4, value5)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});



