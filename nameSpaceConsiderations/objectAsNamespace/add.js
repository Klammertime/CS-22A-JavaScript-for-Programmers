var myApp = {};

myApp.update = function() {

    // Get the two input numbers
    var firstNumber = Number(document.getElementById('first').value);
    var secondNumber = Number(document.getElementById('second').value);
    // Then compute the sum
    var myAnswer = firstNumber + secondNumber;
    // And write it in the 'answer' element
    document.getElementById('answer').textContent = myAnswer;
};

myApp.help = function() {
    // check that there is an answer currently displayed
    var currentAnswer = Number(document.getElementById('answer').textContent);
    if (currentAnswer) {
        document.getElementById('answer').textContent =
            currentAnswer +
            '=' +
            document.getElementById('first').value +
            '+' +
            document.getElementById('second').value;
    }
};

// document.body.addEventListener('input', myApp.update, false);
document.getElementById('first').addEventListener('input', myApp.update, false);
document.getElementById('second').addEventListener('input', myApp.update, false);
document.getElementById('answer').addEventListener('mouseover', myApp.help, false);

// document.body.addEventListener('input', function() {
//   // Get the two input numbers
//   var firstNumber = Number(document.getElementById('first').value);
//   var secondNumber = Number(document.getElementById('second').value);
//   // Then compute the sum
//   var myAnswer = firstNumber + secondNumber;
//   // And write it in the 'answer' element
//   document.getElementById('answer').textContent = myAnswer;
// }, false);