"use strict";

// Global variable
let _restaurant = [];

// Fetches JSON data from the JSON file categories.json
fetch('json/restaurants.json')
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
        htmlTemplate += /*html*/ `
        <article>
        <a href = "#cafe-x"> <img src = "${restaurant.img}"> 
        <h3>${restaurant.name}</h3></a>
        </article>
        `;

    }

    document.querySelector("#restaurants").innerHTML = htmlTemplate;
}