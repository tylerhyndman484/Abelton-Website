// Drop Down Menu for Mobile when the menu button is clicked
// Change the color of the menu botton, menu button::after, and mobileNav Img to white when clicked
// Color change of the above need to transition and not immediately change

let btn = document.getElementById("menuButton");
let mobileLogo = document.getElementById("logo");

let counter = 0;


btn.addEventListener('click', () => {
    if (btn.style.color === 'black') {
        btn.style.color = 'white';
        mobileLogo.style.filter = 'invert()';
    } else {
        btn.style.color = 'black';
        mobileLogo.style.filter = 'none';
    }   
    }) 








