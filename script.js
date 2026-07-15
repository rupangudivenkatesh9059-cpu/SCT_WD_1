// Select the navigation bar
const navbar = document.getElementById("navbar");

// Change navbar color while scrolling
window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#2E1A14";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    } else {
        navbar.style.backgroundColor = "#4E342E";
        navbar.style.boxShadow = "none";
    }

});