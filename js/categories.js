"use strict";

// Global variable
let _category = [];

// Fetches JSON data from the JSON file categories.json
fetch('json/categories.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData);
        _category = jsonData;
        appendCategories(jsonData)
    });

// Appends JSON data to the DOM
function appendCategories(categories) {
    let htmlTemplate = "";
    for (let category of categories) {
        htmlTemplate += /*html*/ `
        <article onclick = "filteredbykeyword('${category.name}')">
        <a href = "#restauranter"> <img src = "${category.img}"> 
        <h3>${category.name}</h3></a>
        </article>
        `;

    }

    document.querySelector("#categories").innerHTML = htmlTemplate;
}
function filteredbykeyword(keyword) {
    let restaurants = [];
    for (let restaurant of _cafes) {
        console.log(restaurant)
        if (restaurant.categories.includes(keyword.toLowerCase())) {
            restaurants.push(restaurant);
        }
    }
    console.log(restaurants);
    appendRestaurants(restaurants);
    navigateTo("restauranter");
}