'use strict';
// function sendRequest() {
//     // create an XMLHttpRequest object
//     var request = new XMLHttpRequest();
//     // Specify a GET request for the file data.html
//     request.open("GET", "../html/data.html");
//     request.send();
//     // define the function to be called when the response is received.
//     request.onreadystatechange = function () {
//        // check that the response is complete and the request was successful
//        if (request.readyState === 4 && request.status === 200){
//           // Display the response
//           document.getElementById("response").innerHTML = request.responseText;
//        }
//     };
// }
// // Add an event listener to call sendRequest when the button is clicked
// document.getElementById("request").addEventListener("click", sendRequest);

function sendRequest(){

  // load additional data from the server into the response element
  $("#response").load("../html/data.html #line2");
}
// Add an event listener to call sendRequest when the button is clicked
  $("#request").on("click", sendRequest);

