var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
//DB connection ---------------------------
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'travel'
});
 
connection.connect();
//-----------------------------------------
app.get('/attractions', function (req, res, next) {
    //Query data ---------------
    connection.query('SELECT * FROM attractions', function (error, results, fields) {
        if (error) throw error;
      //  console.log('Query result is: ', results);
      res.json(results)
      });
    //--------------------------
  //res.json({msg: 'Hello OH: This is CORS-enabled for all origins!'})
 
})

app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333')
})