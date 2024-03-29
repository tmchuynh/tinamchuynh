"use strict";

// Start of Back to Top functions
var mybutton = document.getElementById("backToTop");

/* A function that is called when the user scrolls the page. */
window.onscroll = function() {
    scrollFunction()
};

/**
 * If the user scrolls down 20 pixels from the top of the document, show the button. Otherwise, hide
 * the button
 */
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

/**
 * When the user clicks the button, the page will scroll to the top of the page
 */
function topFunction() {
    // Back to Top button onclick function
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* This is a function that is called when the DOM is loaded. It is used to stop the dropdown menu from
closing when clicked. */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
});

/* Trying to get the navbar-toggler class and then when it is clicked, it is trying to get the
navbar-collapse collapse class. */
var toggler = document.getElementsByClassName("navbar-toggler");
// console.log(toggler);
toggler.onclick = function() {
    let mobile = document.getElementsByClassName("navbar-collapse collapse");
    console.log(mobile);
}
// End