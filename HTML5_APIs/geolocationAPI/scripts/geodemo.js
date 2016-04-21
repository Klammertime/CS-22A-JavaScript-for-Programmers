// show the latitude and the longitude corresponding to the given position
function showPosition(position)
{
  document.getElementById("latitude").textContent = position.coords.latitude;
  document.getElementById("longitude").textContent = position.coords.longitude;

  var msg = "Here is everything else:";
  msg += "<h2>Accuracy: " + position.coords.accuracy + "</h2>";
  msg += "<h2>Altitude: " + position.coords.altitude + "</h2>";
  // msg += "<h2>Speed: " + position.coords.speed + "</h2>";


  document.getElementById("everything").innerHTML = msg;
}
document.getElementById("findme").addEventListener("click", function(){
  navigator.geolocation.getCurrentPosition(showPosition);
});

