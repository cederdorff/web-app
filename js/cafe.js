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

    <div class="xontent">
        <div class="xontent-container">
            <div class="top-container">
                <div class="name">
                    <h1>${cafe.name}</h1>
                </div>

                <div class="price-save">
                    <img src="img/dollar-signs.png" width="27px">
                    <img src="img/heart.png" width="17px">
                </div>

            </div>

            <div class="info">

                <div id="icon-text">
                    <img src="img/opening-hours.png" width="20px">
                    <p>${cafe.hours}</p>
                </div>

                <div id="icon-text">
                    <img src="img/phone.png" width="20px">
                    <p>${cafe.phone}</p>
                </div>

                <div id="icon-text">
                    <img src="img/address.png" width="20px">
                    <p>${cafe.adress}</p>
                </div>
            </div>

        </div>
    </div>

<div class="c-container">
  <button class="accordion">${cafe.option1}</button>
  <div class="accordion-content">
      <p>
    ${cafe.description1}
    </p>
  </div>

  <button class="accordion">${cafe.option2}</button>
  <div class="accordion-content">
   <p>
    ${cafe.description1}
    </p>
  </div>



  <button class="accordion">${cafe.option3}</button>
  <div class="accordion-content">
   <p>
    ${cafe.description1}
    </p>
  </div>
</div>


    
    <h3>Se resten af vores menu<p><a href="${cafe.link}">her</a></h3>

    </section>
        `;

    }
    console.log(htmlTemplate);

    document.querySelector("body").innerHTML += htmlTemplate;
    pageChange();
}

// COLLAPSIBLES

function init() {
    let coll = document.getElementsByClassName("accordion");
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


