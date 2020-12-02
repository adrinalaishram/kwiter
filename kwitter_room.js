
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB_PHgUffepIlilNfEylyr3vwr2auRvNbc",
      authDomain: "kwitter-645d0.firebaseapp.com",
      databaseURL: "https://kwitter-645d0.firebaseio.com",
      projectId: "kwitter-645d0",
      storageBucket: "kwitter-645d0.appspot.com",
      messagingSenderId: "811302232859",
      appId: "1:811302232859:web:f35ef4787f54a6510a29be",
      measurementId: "G-JNLJJKDSLM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
