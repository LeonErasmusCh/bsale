const mysql = require('mysql');

  const connection = mysql.createConnection({
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    database: 'bsale_test'
  });
  console.log("Connected!");
  connection.query('SELECT * FROM product', function (err, rows, fields) {
      if (err) throw err
    
     return console.log(rows)
    })
    
    connection.end()

module.exports = connection;

// to run server - run following cammnds in terminal :
// cd api
// node dbconnection.js