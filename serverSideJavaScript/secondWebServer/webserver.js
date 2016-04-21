/* 
* CS 22A - our second node web server
* this server serves nodedemo.thml regardless of the request 
*/
'use strict';
// The following function will be called when the server is handling
// a request

function servePage(request, response) {
  // Read the file asynchronously
  // The filename is hardcoded here - nodedemo.html is assumed to be in 
  // a separate html folder
  // readFile method takes one more argument than readFileSync
  // it is the callback function, the readFile method is asynchronous
  // so we provide a fcn Node can invoke after readFile has completed execution
  
  fs.readFile(resource, function(err, content) {
    if(err) { // If there is an error, set the status code
      response.writeHead(404, {'Content-Type': 'text/plain; charset = UTF-8'});
      response.write(err.message); // Includes the error message body
      response.end(); // Done
    } else  { // Otherwise, the file was read successfully. 
      response.writeHead(200, // Set the status code
          {'Content-Type': 'text/html; charset = UTF-8'});
      response.write(content); // Send file contents as response body 
      response.end(); 
    }
  });
}

// Load the file system module
var fs = require('fs');
// load the http module
var http = require('http');

var url = require('url');
var path = require('path');
var resource = url.parse(request.url).pathname;

// create a server object
var server = http.createServer(servePage);
server.listen(8080);
console.log('Server running at http://localhost:8080');