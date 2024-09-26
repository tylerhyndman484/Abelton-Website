// Drop Down Menu for Mobile when the menu button is clicked
// Change the color of the menu botton, menu button::after, and mobileNav Img to white when clicked
// Color change of the above need to transition and not immediately change

const menuButton = document.getElementById("menuButton");
const mobileMenuList = document.getElementsByClassName("mobileMenuList");

function dropdownMobileNav() {
    const mobileMenuList = document.getElementsByClassName("mobileMenuList");
    mobileMenuList.style.top = 0;
}

// menuButton.addEventListener('onclick',);