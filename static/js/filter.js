var filterOptions = document.getElementById("myDropdown");

var filterBtn = document.getElementById("filterBtn");
filterBtn.addEventListener("click", function() {
    console.log("clicked");
    // filterOptions.classList.toggle("show");
    console.log(filterOptions);
    filterOptions.classList.toggle("d-flex");
});


function toggleFilterMenu() {
    filterOptions.classList.toggle("d-flex");
}


document.addEventListener("click", (evt) => {
    let userClick = evt.target;

    do {
        if (userClick == filterOptions || userClick == filterBtn) {
            return;
        }
        userClick = userClick.parentNode;

    } while (userClick);
    if (filterOptions.classList.contains("d-flex")) {
        filterOptions.classList.toggle("d-flex");
    }
});