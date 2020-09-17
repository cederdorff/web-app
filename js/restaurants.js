"use strict";

// Global variable
let _restaurant = [];

// Fetches JSON data from the JSON file categories.json
fetch('json/cafe.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData);
        _restaurant = jsonData;
        appendRestaurants(jsonData)
    });

// Appends JSON data to the DOM
function appendRestaurants(restaurants) {
    let htmlTemplate = "";
    for (let restaurant of restaurants) {
        console.log(restaurant);
        htmlTemplate += /*html*/ `
        <article>
        <a href="#${restaurant.id}"> <img src="${restaurant.img}">
        <div>
        <h3>${restaurant.name}</h3></a>
<img class src="img/heart.png">
    </div>
        </article>
        `;

    }

    document.querySelector("#restaurants").innerHTML = htmlTemplate;
}