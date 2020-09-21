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
        <section class="page" class="cafema" id="${cafe.id}">
        <div class="bg-holder" style="background-image: url('${cafe.img}')">
          <a href="#restauranter"><img src="img/arrow.png" alt="" id="arrow-cafe"></a> <br><br><br>
        </div>

    <div id="xontent">
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
               <div id="icon-text">
                    <img src="img/stars.png" width="110px">
  </div> 

            </div>

        </div>
    </div>

  <div class="fontent">
    <div class="accordion">
      <div class="accordion__item open-accordion">
        <div class="accordion__header">${cafe.option1}</div>
        <div class="accordion__body">
          <p>${cafe.description1}</p>
        </div>
      </div>
      <div class="accordion__item">
        <div class="accordion__header">${cafe.option2}</div>
        <div class="accordion__body">
          <p>${cafe.description2}</p>
        </div>
      </div>
      <div class="accordion__item">
        <div class="accordion__header">${cafe.option3}</div>
        <div class="accordion__body">
          <p>${cafe.description3}
          </p>
        </div>
      </div>
     
    </div>
  </div>


    
    <div class="menu-link">
      <h3>Se resten af vores menu <a href="${cafe.link}">her</a></h3>
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


  $(document).ready(function () {
    $('.accordion__header').click(function () {

      $(".accordion__body").not($(this).next()).slideUp(400);
      $(this).next().slideToggle(400);

      $(".accordion__item").not($(this).closest(".accordion__item")).removeClass("open-accordion");
      $(this).closest(".accordion__item").toggleClass("open-accordion");
    });
  });
};