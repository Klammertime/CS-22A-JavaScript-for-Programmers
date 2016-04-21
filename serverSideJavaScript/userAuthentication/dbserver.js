/*
* CS 22A - web server with basic authentication and database access
*/
'use strict';
// The function servePage will be called whenever the server
// receives an authenticated request.
// We can access the user name through the request object.
// We use the user name to get the address and email from the database
// then include them in the response.
function servePage(request, response) {
  // open the database file
  var db = new sqlite3.Database('cs22a.db');
  // run the SQL query and specify a callback function to handle the request
  // The "SELECT" * FROM USERS WHERE NAME = ..." is our SQL query here
  db.get("SELECT * FROM USERS WHERE NAME = '" + request.user + "'", function(error, result) {
      if(error) {
        console.log(error) // If there is an error accessing the database, log the error
      } else {
          // we got the info, close the database
          db.close();
          response.writeHead(200, {'Content-Type': 'text/html; charset = UTF-8'});
          // respond with a personalized HTML web page
          response.write("<!DOCTYPE html>");
          response.write("<html>");
          response.write("<head>");
          response.write("<title>JavaScript for Programmers</title>");
          response.write("</head>");
          response.write("<body>");
          response.write("<h2>" + request.user + " 's Profile</h2>");
          response.write("<p> Address: " + result.ADDRESS + "</p>"); // Info obtained from database
          response.write("<p> Email: " + result.EMAIL + "</p>"); // Info obtained from the database
          response.write("</body>");
          response.end("</html>");
      }
    });
  };

  // load the http module
  var http = require('http');
  // load the http-auth module
  var auth = require('http-auth');
  // load the sqlite3 module
  var sqlite3 = require('sqlite3');
  // set the basic authentication options
  var basic = auth.basic({
    realm: "CS22A area",
    // the following assumes that the password file is 'cs22users'
    // and it is in the same directory as the current script
    file: 'cs22users'
  });
  // create a server object with the basic authentication options
  var server = http.createServer(basic, servePage);
  // listen on port 8080
  server.listen(8080);
  // log an informational message
  console.log('Server running at http://localhost:8080');





