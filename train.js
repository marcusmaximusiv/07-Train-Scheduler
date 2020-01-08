// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyA_QypGPkcjPtylRDscf7-HQl8ribnFeIs",
    authDomain: "time-sheet-55009.firebaseapp.com",
    databaseURL: "https://time-sheet-55009.firebaseio.com",
    storageBucket: "time-sheet-55009.appspot.com"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // 2. Button for adding Employees
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainname = $("#train-name-input").val().trim();
    var traindest = $("#destination-input").val().trim();
    var firsttrain = moment($("#first-train-input").val().trim(), "MM/DD/YYYY").format("X");
    var frequency = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newTrain = {
      name: trainname,
      dest: traindest,
      firsttrain: firsttrain,
      frequency: frequency
    };
  
    // Uploads employee data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.traindest);
    console.log(newTrain.firsttrain);
    console.log(newTrain.frequency);
  
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#employee-name-input").val("");
    $("#role-input").val("");
    $("#start-input").val("");
    $("#rate-input").val("");
  });
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainname = childSnapshot.val().name;
    var traindest = childSnapshot.val().role;
    var firsttrain = childSnapshot.val().start;
    var frequency = childSnapshot.val().rate;
  
    // Employee Info
    console.log(trainname);
    console.log(traindest);
    console.log(firsttrain);
    console.log(frequency);
  
    // Prettify the employee start
    var firsttrainPretty = moment.unix(firsttrain).format("MM/DD/YYYY");
  
    // Calculate the months worked using hardcore math
    // To calculate the months worked
    var empfrequency = moment().diff(moment(frequency, "X"), "hours");
    console.log(empfrequency);
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(empName),
      $("<td>").text(empRole),
      $("<td>").text(firsttrainPretty),
      $("<td>").text(empfrequency)
    );
  
    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
  });
  