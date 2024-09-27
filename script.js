// Drop Down Menu for Mobile when the menu button is clicked
// Change the color of the menu botton, menu button::after, and mobileNav Img to white when clicked
// Color change of the above need to transition and not immediately change

let btn = document.getElementById("menuButton");
let mobileLogo = document.getElementById("logo");
let mobileArrow = document.getElementById("downArrow");
let mobileMenuList = document.getElementById("mobileMenuList");

function mobileNavColorChange() {
    if (btn.className === 'menuButton') {
        btn.className = 'jsMenuButton';
        mobileLogo.className = 'jsMobileNavLogo';
        mobileArrow.className = 'jsDownArrow';
    } else {
        btn.className = 'menuButton';
        mobileLogo.className = 'mobileNavLogo';
        mobileArrow.className = 'downArrow';
    }    
}


btn.addEventListener('click', mobileNavColorChange); 







