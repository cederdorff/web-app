//"use strict";

/*
document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        document.querySelector('.splash').classList.add('display-none');
    }, 2000);

});*/



let _favoritter = [];

function addtofav(id) {
    console.log(id);
    let fav = getrestaurant(id);
    _favoritter.push(fav)
    console.log(_favoritter);
    appendFav(favoritter);
}

function getrestaurant(id) {

    let restaurantreturn;
    for (let rest of _cafes) {
        console.log(rest);
        if (rest.id === id) {
            restaurantreturn = rest
        }
    }
    return restaurantreturn
}

function appendFav(favoritter) {
    document.querySelector("#favoritter").innerHTML = htmlTemplate;
}