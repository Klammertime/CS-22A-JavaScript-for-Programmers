/*
* CS 22A - our first node web server
* This server serves a fixed response regardless of the request
*/

'use strict';
// The function servePage will be called whenever the server
// receives a request
function servePage(request, response) {
  // 200 is the status code for success
  response.writeHead(200, {'Content-Type': 'text/html; charset = UTF-8'});
  // respond with a basic HTML web page 
  response.write('<!DOCTYPE html>'); 
  response.write('<html>');
  response.write('<head>');
  response.write('<title>JavaScript for Programmers</title>');
  response.write('</head>');
  response.write('<body>');
  response.write('<h2>Server-side JavaScript</h2>');
  response.write('<h4>Node</h4>');
  response.write('<p>Node.js includes asynchronous libraries such as http and fs.</p>');
  response.write('</body>');
  response.end('</html>');
}

// load the http module
// http module in node gives us access to a collection of methods
// that support http communication between client and server
// we load it below with require. function require reads and 
// executes a js file and then returns its exported object. 
// then we access the different methods in that file through 
// that object. can access the methods available in the http
// module through our local variable http
var http = require('http');
// create a server object 
// we can create a server by invoking http.createServer()
// http.createServer take an optional function as an argument
// if present that function is called whenever a request
// even occurs, whenever the server receives a request from a client
// so the code below creates the server, http.createServer that is

var server = http.createServer(servePage);
// listen on port 8080 - the listen method is called on our server object 

// since we created a server above, now we tell it to 'listen'
// to requests from clients, we want it to listen to requests
// received on port 8080
// server was our newly created server object, listen was
// called on our newly created server object
server.listen(8080);
// this program runs a server, listening on port 8080 responding
// to client requests with the same html page
// log an informational message 
console.log('Server running at http://localhost:8080');
