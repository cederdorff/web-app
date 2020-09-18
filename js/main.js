//"use strict";

/*
document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        document.querySelector('.splash').classList.add('display-none');
    }, 2000);

});*/


function changeImg1() {
    var image = document.getElementById('heartImage');
    if (image.src.match("img/black-heart.png")) {
        image.src = "img/heart.png";
    } else {
        image.src = "img/black-heart.png";
    }
}

function changeImg2() {
    var image = document.getElementById('houseImage');
    if (image.src.match("img/black-house.png")) {
        image.src = "img/house.png";
    } else {
        image.src = "img/black-house.png";
    }
}

function changeImg3() {
    var image = document.getElementById('mapImage');
    if (image.src.match("img/black-map.png")) {
        image.src = "img/map.png";
    } else {
        image.src = "img/black-map.png";
    }
}

