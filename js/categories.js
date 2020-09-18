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
        console.log(_category);
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

function search(value) {
    let searchQuery = value.toLowerCase();
    let filteredProducts = [];
    for (let cat of _category) {
        let name = cat.name.toLowerCase();
        console.log(cat.restaurant[0]);
        for (let rest of cat.restaurant) {
            console.log(rest);
            let restaurant = rest.toLowerCase();

            if (name.includes(searchQuery) || restaurant.includes(searchQuery)) {
                filteredProducts.push(cat);
            }
        }

    }
    console.log(filteredProducts);
    appendCategories(filteredProducts);
}