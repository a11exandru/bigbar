const label = document.querySelector('.menu-label');
const input = document.getElementById('menu');
const menuLinks = document.querySelector('.menu-links');

// functia deschide/inchide meniu
let showMenu = () => {
    if(input.checked == false) {
        menuLinks.style.top = "0";
        label.classList.add('change');
        deschis++;
    } else {
        menuLinks.style.top = "-100%";
        label.classList.remove('change');
        deschis++;
    }
}