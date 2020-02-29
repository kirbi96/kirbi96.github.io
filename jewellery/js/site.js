/* SEARCH */
$(function searh() {
    $("img.search__img").click(function() {
        $("div.search__scan").removeClass("search");
        $("div.search__scan").toggleClass("scan");
    });
});



/* MODAL WINDOW */
$(document).ready(function(){
    $(".header__news").click(function() {
        $("#myModal").modal('show');  //открыть модальное окно с id="myModal"
    });
});



/* COLLECTION SLIDE */
function nextImg() {
    var block = document.getElementById("block");
    if (parseInt(block.style.left) >= -270) { // Если добавить коллекцию -25 к значению
        block.style.left = parseInt(block.style.left) - 25 + "%";
    }
    else {
        block.style.left = -75 + "%";
    }
}

function undoImg(){
    var block = document.getElementById("block");
    if (parseInt(block.style.left) < -3) { // Если добавить коллекцию +25 к значению
        block.style.left = parseInt(block.style.left) + 25 + "%";
    }
    else {
        block.style.left = -171 + "%"; // Если добавить коллекцию -25 к значению
    }
}


// COLLECTION IMG
$(function prov() {
    $("img.coll_img1").click(function() {
        $("div.coll").removeClass("active");
        $("div.coll__text1").toggleClass("active");
    });
    $("img.coll_img2").click(function() {
        $("div.coll").removeClass("active");
        $("div.coll__text2").toggleClass("active");
    });
    $("img.coll_img3").click(function() {
        $("div.coll").removeClass("active");
        $("div.coll__text3").toggleClass("active");
    })
    $("img.coll_img4").click(function() {
        $("div.coll").removeClass("active");
        $("div.coll__text4").toggleClass("active");
    })
    $("img.coll_img5").click(function() {
        $("div.coll").removeClass("active");
        $("div.coll__text5").toggleClass("active");
    })
    $("img.coll_img6").click(function() {
        $("div.coll").removeClass("active");
        $("div.coll__text6").toggleClass("active");
    })
    $("img.coll_img3").click(function() {
        $("div.coll").removeClass("active");
        $("div.coll__text3").toggleClass("active");
    })
    $("img.coll_img3").click(function() {
        $("div.coll").removeClass("active");
        $("div.coll__text3").toggleClass("active");
    })
    $("img.coll_img7").click(function() {
        $("div.coll").removeClass("active");
        $("div.coll__text7").toggleClass("active");
    })
    $("img.coll_img8").click(function() {
        $("div.coll").removeClass("active");
        $("div.coll__text8").toggleClass("active");
    })
    $("img.coll_img9").click(function() {
        $("div.coll").removeClass("active");
        $("div.coll__text9").toggleClass("active");
    })
});

// COUNTRY AND CITY

var cities = {
    rus: ["Москва", "Домодедово"],
};
var country = document.getElementById("country");
var city = document.querySelector("#city");
window.onload = selectCountry;
country.onchange = selectCountry;

function selectCountry(ev){
    city.innerHTML = "";
    var c = this.value || "rus", o;
    for(let i = 0; i < cities[c].length; i++){
        o = new Option(cities[c][i],i,false,false);
        city.add(o);
    };
}
