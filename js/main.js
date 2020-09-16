"use strict";


document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        document.querySelector('.splash').classList.add('display-none');
    }, 2000);

});



// MAP - inspiration from https://developers.google.com/maps/documentation/javascript/adding-a-google-map

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {
        lat: 56.1516334,
        lng: 10.2073002
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}


// script src = "https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js" > < /script>

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFb2gnudHLurTfiA_w3FiXBBos9gGoVBM",
    authDomain: "web-app-67174.firebaseapp.com",
    databaseURL: "https://web-app-67174.firebaseio.com",
    projectId: "web-app-67174",
    storageBucket: "web-app-67174.appspot.com",
    messagingSenderId: "665582242079",
    appId: "1:665582242079:web:5d1ca01dfa78a9b3a4882a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);