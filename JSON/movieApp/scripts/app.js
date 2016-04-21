 /*
  * CS 22A - Movie Scene Finder
  */

 (function() {
     'use strict';
    var filmLocation = [],
        jsonObj,
        myApp = {};

     myApp.getAjaxData = function(event) {
        var request = new XMLHttpRequest(),
            filename = '../data/' + event.target.id + '.json';
         request.open('GET', filename);
         request.send();
         request.onreadystatechange = function() {
             if (request.readyState === 4 && request.status === 200) {
                 myApp.displayInfo(request.responseText);
             }
         };
     };

     myApp.displayInfo = function(jsonString) {
         var jsonObj2 = JSON.parse(jsonString);
         filmLocation = [];
         jsonObj2.data.forEach(function(val, ind, arr) {
             var obj = {
                 id: arr[ind][0],
                 location: arr[ind][10],
                 description: arr[ind][11],
                 latLong: ""
             };
             filmLocation.push(obj);
             myApp.getLatLongData(arr[ind][10], ind);
         });
     };

     myApp.makeMap = function(newId) {
         $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAL5SAm2qFfv3B0vnxemrlGo42IZq0DYk4", function() {
             var map = new google.maps.Map(document.getElementById("map"), {
                 center: new google.maps.LatLng(37.775, -122.4183333),
                 zoom: 12,
                 mapTypeId: google.maps.MapTypeId.ROADMAP,
                 scaleControl: true
             });
             var locationWindow = new google.maps.InfoWindow();
             for (var i = 0; i < filmLocation.length; i++) {
                 var data = filmLocation[i],
                     latLng = new google.maps.LatLng(data.latLong.lat, data.latLong.lng);
                 var marker = new google.maps.Marker({
                     position: latLng,
                     map: map,
                     title: data.description,
                 });

                 (function(marker, data) {
                     google.maps.event.addListener(marker, "click", function(event) {
                        var desc = data.description || '  ',
                            infoForWindow = "<p>" + data.location + "</p>" + "<p>" + desc + "</p>";
                         locationWindow.setContent(infoForWindow);
                         locationWindow.open(map, marker);
                     });
                 })(marker, data);
             }
         });
     };

     myApp.getLatLongData = function(event, index) {
         var request = new XMLHttpRequest();
         var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + event + '&key=AIzaSyAL5SAm2qFfv3B0vnxemrlGo42IZq0DYk4';
         request.open('GET', url);
         request.send();
         request.onreadystatechange = function() {
             if (request.readyState === 4 && request.status === 200) {
                 jsonObj = JSON.parse(request.responseText);
                 filmLocation[index].latLong = jsonObj.results[0].geometry.location;
             }
             var info = '';
             filmLocation.forEach(function(val, ind, arr) {
                 info += '<p id="' + arr[ind].id + '">' + arr[ind].location + '</p>';
             });
             document.getElementById('movieInfo').innerHTML = info;
         };
     };

     document.getElementById('movies').addEventListener('click', myApp.getAjaxData, false);
     document.getElementById('movies').addEventListener('click', myApp.makeMap, false);

 }());

 /* Post-Review Notes from Professor when I asked how to fix the API from being called several times:

 Hi Audrey,
 There are two steps involved here.  We download the code (that's what I meant by loading) and then we use it.  
 In your program you are combining the two steps into one call to $getScript.  
 Let's take a closer look at the $getScript call:
    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAL5SAm2qFfv3B0vnxemrlGo42IZq0DYk4", function(){
       var map = new google.maps.Map(document.getElementById("map"), {
         center: new google.maps.LatLng(37.775,-122.4183333),
         zoom: 12,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
         scaleControl: true
       });
       var locationWindow = new google.maps.InfoWindow();
       for (var i = 0; i < filmLocation.length; i++) {
         var data = filmLocation[i],
             latLng = new google.maps.LatLng(data.latLong.lat, data.latLong.lng); 
         var marker = new google.maps.Marker({
           position: latLng,
           map: map,
           title: data.description,
         });
  
         (function(marker, data) {
           google.maps.event.addListener(marker, "click", function(event) {
             var desc = data.description || '  ';
             var infoForWindow = "<p>" + data.location + "</p>" + "<p>" + desc + "</p>";
             locationWindow.setContent(infoForWindow);
             locationWindow.open(map, marker);
           });
         })(marker, data);
       }
     });
 $getScript downloads the code from maps.googleapis.com/maps... and then executes the function specified as its second argument.
 Because the $getScript statement is inside the makeMap event listener, both steps are executed every time the user clicks on the movies element.  This is not only unnecessary, it also results in the following error message:  you have included the Google Maps API multiple times on this page. This may cause unexpected errors' problem.
 You can do one of two things to fix the problem.
 1. Move the $getScript statement to outside the makeMap method and put it in the main program (where you are registering the event listeners.  You'll also need to take out the callback function because we just want to load the code here and not execute it.  So you'll have:
  $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAL5SAm2qFfv3B0vnxemrlGo42IZq0DYk4")
   document.getElementById('movies').addEventListener('click', myApp.getAjaxData, false);
   document.getElementById('movies').addEventListener('click', myApp.makeMap, false);
  
 You'll also have to modify makeMap method so that it actually executes the statements that were part of the $getScript callback function.  You'll have something like:
  
   myApp.makeMap = function(newId){
       var map = new google.maps.Map(document.getElementById("map"), {
         center: new google.maps.LatLng(37.775,-122.4183333),
         zoom: 12,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
         scaleControl: true
    });
    ....
 2. Take out the $.getScript statement from myapp.js and include the following in movies.html so that the api is loaded once when the document (and the rest of the code) is loaded.
  <script defer src= "https://maps.googleapis.com/maps/api/js key=AIzaSyAL5SAm2qFfv3B0vnxemrlGo42IZq0DYk4"></script>
 You'll also have to make the same modifications to makeMap method so that it actually executes the statements that were part of the $getScript callback function.
 I hope this helps.  
 */