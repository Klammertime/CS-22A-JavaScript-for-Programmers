function drawSquare(event) {
    // function takes the event object as a parameter
    var myCanvas = document.getElementById("myCanvas");
    // obtain the coordinates with respect to the canvas
    var x = event.clientX - myCanvas.offsetLeft;
    var y = event.clientY - myCanvas.offsetTop;
    // access the canvas, need its context
    var myContext = myCanvas.getContext("2d");
    // set the color to blue
    myContext.fillStyle = "#0b3f57";

    // draw a 20 by 20 square starting at the click event position
    myContext.fillRect(x, y, 20, 20);
}

document.getElementById("myCanvas").addEventListener("click", drawSquare, false);