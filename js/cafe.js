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
            <p>${cafe.hours}</p>
    <p>${cafe.phone}</p>
    <p>${cafe.adress}</p>

    <h3>Vores glutenfri valgmuligheder</h3>
    <p>${cafe.option1}</p>
<p>${cafe.option2}</p>
<p>${cafe.option3}</p>
<h3>Se resten af vores menu<a><p>her</p></a></h3>
    
    </section>
        `;

    }
    console.log(htmlTemplate);

    document.querySelector("body").innerHTML += htmlTemplate;
    pageChange();
}