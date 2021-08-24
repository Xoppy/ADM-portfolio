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