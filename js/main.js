//"use strict";

/*
document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        document.querySelector('.splash').classList.add('display-none');
    }, 2000);

});*/



let _favoritter = [];

function addtofav(id) {
    console.log(id);
    let fav = getrestaurant(id);
    _favoritter.push(fav)
    console.log(_favoritter);
    appendFav(_favoritter);
}

function getrestaurant(id) {

    let restaurantreturn;
    for (let rest of _cafes) {
        console.log(rest);
        if (rest.id === id) {
            restaurantreturn = rest
        }
    }
    return restaurantreturn
}

function appendFav(restaurants) {
    let htmlTemplate = "";
    for (let restaurant of restaurants) {
        console.log(restaurant);
        htmlTemplate += /*html*/ `
        <article>
            <a href="#${restaurant.id}"> 
      <div class="page-container">        
<div class="fav-container">

        <div class="img-name-cont">

            <div>
               <img class="rest-img" src="${restaurant.img}">
            </div>

            <div class="name-city">
                <div class="rest-name">
                <h2>${restaurant.name}</h2>
                </div>

                <div class="rest-city">
                <h3>Aarhus</h3>
            </div>
            
            </div>
        </div>
</a>

        <div class="heart-img">
            <img id="hjerte" onclick="addtofav('${restaurant.id}')" src="img/heart-filled.png">
        </div>


    </div>

 </div>  





        </article>
        `
    };


    document.querySelector("#favoritcontainer").innerHTML = htmlTemplate;
}




// Sets active tabbar/ menu item
function setActiveTab(pageId) {
    let pages = document.querySelectorAll(".tabbar a");
    for (let page of pages) {
        if (`#${pageId}` === page.getAttribute("href")) {
            page.classList.add("active");
        } else {
            page.classList.remove("active");
        }
    }
}