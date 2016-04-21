// This function takes a parameter, line, and writes the corresponding
// text to the element with id: response.
function displayIt(line){
  // store the text corresponding to the two options in an object
  // with the properties first and second.
  var lineContent = {first: "first line", second: "second line"};
  // display the corresponding line in the html element with id response
  document.getElementById("response").textContent = lineContent[line];
  }
  // this function handles click events on both buttons.
function update(e){
  var stateObject; // our state object will simply contain a string
  displayIt(e.target.id);
  // determine which button was clicked from the event.target
  // and push the corresponding state object.
  if(e.target.id === "first"){
    // identify the state corresponding to FIRST button
    stateObject = "first";
    history.pushState(stateObject, "first line", "#first");
  } else {
    // identify the state corresponding to SECOND button
    stateObject = "second";
    history.pushState(stateObject, "second line", "#second");
  }
}

// Generate the web page corresponding to the state iin history.state.
// If no state is available, restore the original web page.
function generateState(){
  if(history.state){
    displayIt(history.state);
  } else {
    document.getElementById("response").textContent = "";
  }
}

// Add event listeners to call update when a button is clicked
document.getElementById("first").addEventListener("click", update);
document.getElementById("second").addEventListener("click", update);
// add event listener to handle popstate event on the window
window.addEventListener("popstate", generateState);
// Handle the special case of reload
if(history.state){
  generateState();
}



