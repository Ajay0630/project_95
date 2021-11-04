// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKKAzrQJ5xMspkadFPm0uF31dKbkC6Pfk",
    authDomain: "let-s-chat-d4ea0.firebaseapp.com",
    databaseURL: "https://let-s-chat-d4ea0-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-d4ea0",
    storageBucket: "let-s-chat-d4ea0.appspot.com",
    messagingSenderId: "594998970397",
    appId: "1:594998970397:web:a5c217042c07c183105ef4"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
    roomnam = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomnam).update({
          purpose : "adding room name"
    });
    localStorage.setItem("roomname", roomnam);
    window.location = "kwitter_page.html";
}

username = localStorage.getItem("username");
document.getElementById("ooftheooooof").innerHTML = "Welcome, " + username + "!";
function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log(Room_names);
row = "<div class='room_name' id=" + Room_names + " onclick='goroom(this.id)'>#" + Room_names + "</div><hr>"
document.getElementById("output").innerHTML += row;
});});}
getData();

function goroom(name){
    console.log(name);
    localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("username");
    window.location = "index.html";
}