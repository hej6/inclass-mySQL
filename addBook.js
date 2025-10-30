//Author: Sahar Al Seesi
//Date: 10/17/2020
//Code tests mysql installation by adding a record to a table book in database 

const mysql      = require('mysql2');
//Create  a connection pool with mySQL server redentials and dataabase name
const connection_pool = mysql.createPool({
  host     : '34.73.13.150',
  user     : 'nodeuser',
  password : '12345',
  database : 'testInstallation',
  connectionLimit : 10
});
 

//Add a record in the database
//edit this line to add the name of a book you would like to write and your name as the author
connection_pool.query("INSERT INTO book (title, author) VALUES ('Fall Colors', 'Sahar');", function (error, insert_results, fields) {
  if (error) {
	console.log(error);
	connection_pool.end();
  }
	  
  else {	
	 // retrieve the whole book table from the database
	  connection_pool.query('SELECT * FROM book;', function (error, select_results, fields) {
  	  	if (error) {
			console.log(error);
			connection_pool.end();
		}
          	else {
		  	console.log('results ');
			for (x of select_results) //print the contentes of each records
				for (y in x)
					console.log(y+ ":"+x[y]); 
  		  	connection_pool.end();
		     } //else
		}); //end query SELECT
	} //else
});
