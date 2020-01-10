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
	var trainname= $("#train-name-input").val().trim()
	var dest= $("#destination-input").val().trim()
	var freq= moment($("#frequency-input").val().trim(), "mm").format("X");
	var firsttrain= moment($("#first-train-input").val().trim(), "HH:mm").format("X");
//4. Create a temporary object to hold all the data from the form
	var newTrain = {
		name: trainname,
		dest: dest
		freq: freq,
		firsttrain: firsttrain
};
//5. log newtrain object to make sure form values entered by user are correct
	console.log(newTrain.trainname);
	console.log(newTrain.dest);
	console.log(newTrain.firsttrain);
	console.log(newTrain.freq);
//6. Push new data to the temporary object
	database.ref().push(newTrain);
//7. Notifies the user that the information from the form is recorded 
	alert("You entry has been successfully recorded")
//8. Clear form of all entries the user has entered in for the train 
	$(“#train-name-input").val("");
    $(“#destination-input").val("");
    $(“#firsttrain-input").val("");
    $(“#frequency-input").val("");
