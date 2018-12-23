// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAJ-kHys7rIXfoLH1AmmnTIS41k0v9hYcM",
    authDomain: "fir-training-38447.firebaseapp.com",
    databaseURL: "https://fir-training-38447.firebaseio.com",
    projectId: "fir-training-38447",
    storageBucket: "fir-training-38447.appspot.com",
    messagingSenderId: "300374935309"
  };
  firebase.initializeApp(config);
  
// Reference messages collection
var messagesRef = firebase.database().ref('messages');
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
// Submit form
function submitForm(e){//e is for event listener
  // Get values
  var Firstname = document.getElementById('firstname').value;
  var Secondname = document.getElementById('secondname').value;
  var Datee = document.getElementById('date').value;
  var Password = document.getElementById('password').value;
  var Mobile = document.getElementById('mobileno').value;
  var Email = document.getElementById('email').value;
  
  savedata(Firstname, Secondname, Datee, Password, Mobile, Email);//at the place of savedata we can use any variable.
}
// Save message to firebase
function savedata(Firstname, Secondname, Datee, Password, Mobile, Email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({

    First_name:Firstname,

    Second_name:Secondname,

    Birth_date:Datee,

    Password:Password,

    Mobile_no:Mobile,

    Email_id:Email
    
   
  });
}

