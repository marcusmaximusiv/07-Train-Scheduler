// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyB0xjCAbMGZmucV6P3dQfCxJCXZAOjYh2E",
    authDomain: "train-scheduler-bfc09.firebaseapp.com",
    databaseURL: "https://train-scheduler-bfc09.firebaseio.com/",
    storageBucket: "train-scheduler-bfc09.appspot.com"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();

//2. Have an onclick event for the adding a train button
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();
//3. Have variables to store all of the form data
var trainname=
var dest=
var freq=
var firsttrain=
//4. Create a temporary object to hold all the data from the form
var newTrain = {
	name: trainname,
	dest: dest
	freq: freq,
	firsttrain: firsttrain
};
//5. Push new data to the temporary object
database.ref().push(newTrain);
  
