
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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on("value", function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html"
}