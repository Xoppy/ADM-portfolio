// Mobile nav bar menu toogle

let isOpen = false;
let toogledMenuCss = 'transform: translateX(-100vw); z-index: 10; translate: ease 1ms;';
let menuButton = document.querySelector("#mobile-nav");
let mobileNav = document.querySelector(".mobile-nav");

function isOpenSwitch() {
    if (isOpen === false) {
        isOpen = true;
    } else if (isOpen === true) {
        isOpen = false;
    }

    if (isOpen === true) {
        mobileNav.style.transform = "translateX(-100vw)";
    } else {
        mobileNav.style.transform = "translateX(100vw)"
    }

    function menuClose() {
        isOpen = false;
        console.log(isOpen);
    }

    console.log(isOpen);
}

// gallery img hover
let img1 = document.getElementById("desktop-img-1");
let img2 = document.getElementById("desktop-img-2");
let img3 = document.getElementById("desktop-img-3");
let img4 = document.getElementById("desktop-img-4");
let img5 = document.getElementById("desktop-img-5");
let img6 = document.getElementById("desktop-img-6");

let text1 = document.getElementById("img-text-1");
let text2 = document.getElementById("img-text-2");
let text3 = document.getElementById("img-text-3");
let text4 = document.getElementById("img-text-4");
let text5 = document.getElementById("img-text-5");
let text6 = document.getElementById("img-text-6");

function hoverOne(){
    img1.style.opacity = "0.2";
    text1.style.opacity = "1";
}
function outOne(){
    img1.style.opacity = "1";
    text1.style.opacity = "0";
}
function hoverTwo(){
    img2.style.opacity = "0.2";
    text2.style.opacity = "1";
}
function outTwo(){
    img2.style.opacity = "1";
    text2.style.opacity = "0";
}
function hoverThree(){
    img3.style.opacity = "0.2";
    text3.style.opacity = "1";
}
function outThree(){
    img3.style.opacity = "1";
    text3.style.opacity = "0";
}
function hoverFour(){
    img4.style.opacity = "0.2";
    text4.style.opacity = "1";
}
function outFour(){
    img4.style.opacity = "1";
    text4.style.opacity = "0";
}
function hoverFive(){
    img5.style.opacity = "0.2";
    text5.style.opacity = "1";
}
function outFive(){
    img5.style.opacity = "1";
    text5.style.opacity = "0";
}
function hoverSix(){
    img6.style.opacity = "0.2";
    text6.style.opacity = "1";
}
function outSix(){
    img6.style.opacity = "1";
    text6.style.opacity = "0";
}