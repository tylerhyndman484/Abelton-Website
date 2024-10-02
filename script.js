// Drop Down Menu for Mobile when the menu button is clicked
// Change the color of the menu botton, menu button::after, and mobileNav Img to white when clicked
// Color change of the above need to transition and not immediately change

let btn = document.getElementById("menuButton");
let mobileLogo = document.getElementById("logo");
let mobileArrow = document.getElementById("downArrow");
let mobileMenuList = document.getElementById("mobileMenuList");
let moreButton = document.getElementById("more");

function mobileNavColorChange() {
    if (btn.className === 'menuButton') {
        btn.className = 'jsMenuButton';
        mobileLogo.className = 'startingMobileNavLogo';
        mobileArrow.className = 'jsDownArrow';
    } else {
        btn.className = 'menuButton';
        mobileLogo.className = 'jsMobileNavLogo';
        mobileArrow.className = 'downArrow';
    }    
}

function mobileNavMovement() {
    if (btn.className === 'menuButton') {
        mobileMenuList.className = 'startingJsMobileMenuList';
    } else {
        mobileMenuList.className = 'jsMobileMenuList';
    }
}

const moreDropdown = () => {
    const moreSection = document.getElementById("moreDropdown");

    if(moreSection.className === "moreDropdownVisible") {
        moreSection.className =  "moreDropdown";
        moreSection.setAttribute("aria-hidden", "true");
    } else {
        moreSection.className = "moreDropdownVisible";
        moreSection.setAttribute("aria-hidden", "false");
    }
}




btn.addEventListener('click', mobileNavColorChange); 
btn.addEventListener('click', mobileNavMovement);
moreButton.addEventListener('click', moreDropdown);







