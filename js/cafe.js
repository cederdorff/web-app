"use strict";

// Global variable
let _cafes = [];

// Fetches JSON data from the JSON file categories.json
fetch('json/cafe.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData);
        _cafes = jsonData;
        appendCafes(jsonData)
    });

// Appends JSON data to the DOM
function appendCafes(cafes) {
    let htmlTemplate = "";
    for (let cafe of cafes) {
        htmlTemplate += /*html*/ `
        <section class="page" id="${cafe.id}">
            <h2>${cafe.name}</h2>
    
    
    </section>
        `;

    }
    console.log(htmlTemplate);

    document.querySelector("body").innerHTML = htmlTemplate;
    hideAllPages();
    navigateTo("home");
}