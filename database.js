const mysql = require('mysql');

//#region mysql database connection
var connection = mysql.createConnection({ 
    url: DATABASE_URL,
    waitForConnections: true
  });
connection.connect(function(err) {
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }else{
        console.log(`Database Connected`)
        connection.query(`SHOW DATABASES`, 
        function (err, result) {
          if(err)
            console.log(`Error executing the query - ${err}`)
          else
            console.log("Result: ",result) 
        })
      }
});
//#endregion

module.exports = connection;