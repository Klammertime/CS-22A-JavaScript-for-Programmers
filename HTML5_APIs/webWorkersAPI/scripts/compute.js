// This web worker performs some computations
// and returns the result
var sum = 0;
for(var i = 0; i < 90000000; i++){
  sum += Math.pow(i, 5)
}
postMessage(sum);