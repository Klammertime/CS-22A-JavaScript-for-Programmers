function update(){
  // Get the two input numbers
  var firstNumber = Number(document.getElementById('first').value);
  var secondNumber = Number(document.getElementById('second').value);

  // Then compute the sum
  var myAnswer = firstNumber + secondNumber;

  // And write it in the 'answer' element
  document.getElementById('answer').textContent = myAnswer;
};

function startWorker(){
  var worker = new Worker('../scripts/compute.js'); // instantiate worker object
  worker.addEventListener('message', function(event){
    document.getElementById('result').textContent = event.data;
  });
}

document.getElementById('first').addEventListener('input', update, false);
document.getElementById('second').addEventListener('input', update, false);
document.getElementById('start').addEventListener('click', startWorker, false);

