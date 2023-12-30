window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
}

