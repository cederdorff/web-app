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
        init();
    });




// Appends JSON data to the DOM
function appendCafes(cafes) {
    let htmlTemplate = "";
    for (let cafe of cafes) {
        htmlTemplate += /*html*/ `
        <section class="page" id="${cafe.id}">
        <div class="bg-holder" style="background-image: url('${cafe.img}')"></div>
            <div class="parent">

        <h2>${cafe.name}</h2>
            <img class="price" src="img/dollar-signs.png" width="35px">
            <img class="favorite" src="img/heart.png" width="25px">
            <img src="img/opening-hours.png" width="20px">
            <p>${cafe.hours}</p>

            <div class="hours"> 
            <img src="img/phone.png" width="20px">
    <p>${cafe.phone}</p>
    </div>

    <div>
     <img class src="img/address.png" width="20px">
    <p>${cafe.adress}</p>
    </div>

     <img class="rating" src="img/stars.png" width="70px">

<h3>Vores glutenfri valgmuligheder</h3>
<hr>
     <button class="collapsible"><h4>${cafe.option1}</h4></button>
     <div class="content">
         <hr>
    <p>${cafe.description1}</p>
    </div>
<hr>
     <button class="collapsible"><h4>${cafe.option2}</h4></button>
     <div class="content">
         <hr>
    <p>${cafe.description2}</p>
    </div>
<hr>
     <button class="collapsible"><h4>${cafe.option3}</h4></button>
     <div class="content">
         <hr>
    <p>${cafe.description3}</p>
    </div>



<h3>Se resten af vores menu<p><a href="${cafe.link}">her</h3>
    </div>
    </section>
        `;

    }
    console.log(htmlTemplate);

    document.querySelector("body").innerHTML += htmlTemplate;
    pageChange();
}

// COLLAPSIBLES

function init() {
    let coll = document.getElementsByClassName("collapsible");
    let i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

}


