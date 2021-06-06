var firebaseConfig = {
    apiKey: "AIzaSyCg5dbSJw5B54UyojHP6Vs9CQE7qmiZJws",
    authDomain: "classtest-f8efe.firebaseapp.com",
    projectId: "classtest-f8efe",
    storageBucket: "classtest-f8efe.appspot.com",
    messagingSenderId: "503369889041",
    appId: "1:503369889041:web:c7e931473752b2009148b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room name -" + Room_names);
    row = "<div class = 'room_name' id=" +Room_names+
    " onclick= 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "kwitter.html";
}