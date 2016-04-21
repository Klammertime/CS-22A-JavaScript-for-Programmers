// Load the file system module
// var fs = require('fs'); 
// // Read the file synchronously
// // Make sure the file path is correct for your system
// var content = fs.readFileSync('./html/calculator.html', 'utf8');
// // Display the content
// console.log(content); 



// // Load the file system module
// var fs = require('fs');
// // Read the file asynchronously and call the anonymous callback function 
// // when done

// fs.readFile('./html/calculator.html', 'utf8', function(error, content){
//   if(error){
//     console.log(error);
//   } else {
//     // If there is no error, display the output 
//     console.log(content);
//   }
// }
// );


// Callback Function to display the file content
function displayIt(error, content){
  if(error) {
    console.log(error);
  } else {
    // If there is no error, display the output 
    console.log(content);
  }
};

// Load the file system module called fs, gives us access to standard
// file operations, to use this module, we need to 'load it' or 
// 'import' it using require, nodes built-in function
var fs = require('fs');
// Read the file asynchronously and call displayIt when done
fs.readFile('./html/calculator.html', 'utf8', displayIt);

