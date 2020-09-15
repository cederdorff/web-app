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
        <article>
        <img src ="${category.img}">
        <h3>${category.name}</h3>
        </article>
        `;

    }

    document.querySelector("#categories").innerHTML = htmlTemplate;
}