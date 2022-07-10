"use strict";

// Start of Back to Top functions
var mybutton = document.getElementById("backToTop");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    // Back to Top button onclick function
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
});

var toggler = document.getElementsByClassName("navbar-toggler");
// console.log(toggler);
toggler.onclick = function() {
    let mobile = document.getElementsByClassName("navbar-collapse collapse");
    console.log(mobile);
}
// End